const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();
const MongoKEY = process.env.MongoKEY;


const connectionDB = (url) => {
  return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });
};

module.exports = connectionDB;
