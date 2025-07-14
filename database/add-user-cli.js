const addUser = require("./methods/addUser.js")

async function addUserCli() {
  const username = process.argv[2];
  const password = process.argv[3];

  if (!username || !password) {
    console.log('Ussage: node/ database/add-user.js <username> <password>')
    process.exit(1)
  }

  try {
    const addedUser = await addUser(username,password);
    console.log(addedUser);
    return addedUser

  } catch (error) {
    console.error('Failed to add user:', error);
  }
}

addUserCli();
