const PASSWORD_POSTGRES = '6MbwqMXAwahu9ef';
const HOST = 'db.zcshdvyqkijqnpqtvkad.supabase.co';
const DATABASE = 'postgres';
const DB_USERNAME = 'postgres';

module.exports = {
  development: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES,
    database: DATABASE,
    host: HOST,
    dialect: 'postgres',
  },
  test: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES,
    database: DATABASE,
    host: HOST,
    dialect: 'postgres',
  },
  production: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES,
    database: DATABASE,
    host: HOST,
    dialect: 'postgres',
  },
};
