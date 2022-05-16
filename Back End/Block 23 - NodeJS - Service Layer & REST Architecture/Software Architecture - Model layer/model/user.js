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
  getAll: async () => {
    let [users] = await connection.execute("SELECT id, first_name, last_name, email FROM users");
    users = users.map((user) => ({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
    }));
    return users;
  },
  get: async (id) => {
    let [user] = await connection.execute(
      "SELECT id, first_name, last_name, email FROM users WHERE id = ? LIMIT 1",
      [id]
    );
    user = user[0];
    if (!user) return null;
    return {
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
    };
  },
  put: async (id, { firstName, lastName, email, password }) => {
    await connection.execute(
      "UPDATE users SET first_name = ?, last_name = ?, email = ?, `password` = ? WHERE id = ?",
      [firstName, lastName, email, password, id]
    );
    return {
      id,
      firstName,
      lastName,
      email,
      password,
    };
  },
};
