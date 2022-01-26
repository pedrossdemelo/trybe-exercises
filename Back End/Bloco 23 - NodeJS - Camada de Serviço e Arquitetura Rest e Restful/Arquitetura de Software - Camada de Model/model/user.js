const connection = require("./connection");

module.exports = {
  register: async ({ firstName, lastName, email, password }) => {
    await connection.execute(
      "INSERT INTO users (first_name, last_name, email, `password`) VALUES (?, ?, ?, ?)",
      [firstName, lastName, email, password]
    );
    const [userID] = await connection.execute(
      "SELECT id FROM users WHERE email = ? LIMIT 1",
      [email]
    );
    return userID[0].id;
  },
  isEmailUnique: async (email) => {
    const [user] = await connection.execute(
      "SELECT id FROM users WHERE email = ? LIMIT 1",
      [email]
    );
    return user.length === 0;
  },
};
