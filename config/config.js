require('dotenv').config();

const db = {
  host: process.env.MONGODB_HOST,
  port: process.env.MONGODB_PORT,
  database: process.env.MONGODB_DATABASE,
  user: process.env.MONGODB_USER,
  password: process.env.MONGODB_PASSWORD
};

const mongodbConnection = 'mongodb://' + db.user + ':' + db.password + '@' + db.host + ':' + db.port + '/' + db.database;

const config = {
  database: mongodbConnection
};

module.exports = config;
