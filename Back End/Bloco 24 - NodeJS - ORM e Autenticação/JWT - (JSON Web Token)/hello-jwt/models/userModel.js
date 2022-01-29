const connection = require('./connection');

module.exports = {
  getById: async (id) => {
    const [user] = await connection.execute(
      'SELECT * FROM users WHERE id = ?',
      [id],
    );
    return user.length ? user[0] : null;
  },
  getByUsername: async (username) => {
    const [user] = await connection.execute(
      'SELECT * FROM users WHERE username = ?',
      [username],
    );
    return user.length ? user[0] : null;
  },
};