
const db = require("../index.js")

async function getUser(username){
  return new Promise((resolve, reject) => {
    try {
      const sql = "SELECT username, password FROM users WHERE username = ?";

      db.get(sql,[username],(err,row)=> {
        if (err) {
          console.error('Database error:', err.message);
          reject(err);
          return;
        }
        if (!row){
          console.log(`User '${username}' not found.`)
          resolve(null);
          return;
        }
        resolve(row);
      })
    } catch (error) {
      console.log('Error: ', error.message);
      reject(error);
    }
  });
}

module.exports = getUser;

