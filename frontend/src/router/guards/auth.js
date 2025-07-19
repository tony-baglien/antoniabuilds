export const requiresAuth = async (to, from, next) => {
  try {
    const response = await fetch("/api/auth/status");
    const data = await response.json();
    if (data.authenticated) {
      next();
    } else {
      next("/login");
    }
  } catch (error) {
    next("/login"); //Error when checking auth, default to login
  }
};
