const Sequelize = require('sequelize');
require('dotenv').config(); // Loading environment variables from .env file

let sequelize;

// Check if JAWSDB_URL environment variable is set ( Heroku environment)

if (process.env.JAWSDB_URL) {
  // If JAWSDB_URL is set, create a connection using the provided URL
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // If JAWSDB_URL is not set, create a connection using local MySQL database 
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize; // Export the Sequelize instance for use in other files
