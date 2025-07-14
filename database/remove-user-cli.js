const removeUser  = require("./methods/removeUser.js")
async function removeUserCli() {
  const username = process.argv[2];

  if (!username) {
    console.log("Usage: node/ database/remove-user.js <username>")
    process.exit(1)
  }

  try {
    const removedUser = await removeUser(username);
    console.log(removedUser);
    return removedUser
  } catch(error) {
    console.error('Error: ', error.message);
  }
}

removeUserCli();
