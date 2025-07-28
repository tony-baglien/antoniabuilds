const express = require("express");
const cors = require("cors");
const { spawn } = require("node:child_process");
const bcrypt = require("bcrypt");
const path = require("path"); // Added - you're using path but didn't import it
const session = require("express-session"); // Added - needed for sessions

// Database Methods
const getUser = require("./database/methods/getUser.js");
const app = express();
const PORT = 3000;

//Adding this as a test

console.log("Starting server...");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Added - needed for form data
app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production" ? false : "http://localhost:5173",
    credentials: true,
  }),
);

app.set("trust proxy", 1);
// Session configuration - Added
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production", // Set to true when using HTTPS
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  }),
);

// ========== API ROUTES ========== //

app.get("/api/auth/status", (req, res) => {
  res.json({
    authenticated: !!req.session.user,
    user: req.session.user || null,
  });
});

// Handle Login
app.post("/auth/login", async (req, res) => {
  console.log("Login attempt recieved");
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password required",
      });
    }

    const userInfo = await getUser(username);

    if (!userInfo) {
      return res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, userInfo.password);

    if (isPasswordValid) {
      // Store user in session
      req.session.user = {
        id: userInfo.id,
        username: userInfo.username,
      };

      console.log("Login successful for user:", username);
      res.json({
        success: true,
        message: "Login successful",
        redirectUrl: "/dashboard",
      });
    } else {
      console.log("Invalid password for user:", username);
      res.status(401).json({
        success: false,
        message: "Invalid username or password",
      });
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// Logout
app.post("/auth/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: "Could not log in",
      });
    }
  });
});

// PC-Control
app.post("/run-script/:action", (req, res) => {
  const { action } = req.params;

  // Whitelist
  const allowedActions = ["on", "off", "status", "cycle"];
  if (!allowedActions.includes(action)) {
    return res.status(400).json({ success: false, message: "Invalid action" });
  }

  const scriptPath = path.join(__dirname, "scripts", "pc-control.sh");
  const child = spawn("bash", [scriptPath, action]);

  let output = "";
  let errorOutput = "";

  child.stdout.on("data", (data) => {
    output += data.toString();
  });
  child.stderr.on("data", (data) => {
    errorOutput += data.toString();
  });
  child.on("close", (code) => {
    console.log(output);
    if (code !== 0) {
      return res.status(500).json({
        success: false,
        message: "Script Failed",
        error: errorOutput,
      });
    }
    res.json({
      success: true,
      message: `Command '${action}' executed successfully: ${output.trim()}`,
      output: output.trim(),
    });
  });
});

//In production we wnat to statically serve front end from public/dist/build
app.use(express.static(path.join(__dirname, "public/dist")));
app.get("/", (req, res) => {
  res.json({
    message: "API Server Running",
    frontend: "localhost:5173",
  });
});

// redirect to vue router
app.get("/*splat", (req, res) => {
  res.sendFile(path.join(__dirname, "public/dist/index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  if (process.env.NODE_ENV !== "production") {
    console.log(`API listening on http://localhost:${PORT}`);
    console.log(`Frontend listening on http://localhost:5173`);
  }
});
