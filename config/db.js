const mongoose = require('mongoose');
// const config = require('config');
const dotenv = require('dotenv');
// const db = config.get('mongoURI');
dotenv.config();

db = process.env.mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
