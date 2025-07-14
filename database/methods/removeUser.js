const db = require('../index.js');

async function removeUser(username){
  return new Promise((resolve, reject) => {
    try {
      const sql = "SELECT username FROM users WHERE username = ?";

      db.get(sql,[username], (err, row)=> {
        if (err){
          console.error('Database error:', err.message);
          reject(err);
          return;
        }
        if (!row) {
          console.log(`User '${username}' not found.`);
          reject(new Error(`User '${username}' not found.`));
          return;
        }

        const deleteSql = "DELETE FROM users WHERE username = ?"
        db.run(deleteSql,[username], (err)=>{
          if (err){
            console.error(err.message);
            reject(err)
          } else {
            resolve(`User: ${username} removed successfully!`)
          }
        });
      });
    } catch(error) {
      console.log('Error: ',error.message);
      reject(error)
    }
  })
}

module.exports = removeUser;
