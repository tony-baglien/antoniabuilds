const db = require("./index.js");
const getUser = require("./methods/getUser.js")

async function getUserCli(){
  const username = process.argv[2];

  if (!username) {
    console.log("Usage: node/ database/get-user.js <username>")
    process.exit(1);
  }
  try {
    const user = await getUser(username)
    if (user){
      console.log('Username:', user.username);
      console.log('Password:', user.password);
    }
  } catch (error) {
    console.error('Failed to get user:', error)
  }

}

getUserCli();
