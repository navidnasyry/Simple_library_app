
let mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL)

exports.connect = () => {
    // Connecting to the database
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log("database connection failed. exiting now...");
        console.error(error);
        process.exit(1);
      });
  };

