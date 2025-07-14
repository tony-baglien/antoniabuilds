const bcrypt = require('bcrypt');
const db = require('../index.js');

async function addUser(username,password){
  return new Promise(async (resolve, reject) => {
    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds)

      const sql = "INSERT INTO users (username,password) VALUES (?,?)"

      db.run(sql,[username, hashedPassword], (err) => {
        if (err) {
          console.error('Database error:', err.message);
          reject(err);
          return
        }
      })
      resolve("user added!")
    } catch (error) {
      console.log('Error: ',error.message);
      reject(error)
    }
  });
} 

module.exports = addUser;
