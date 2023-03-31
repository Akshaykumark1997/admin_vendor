const mongoose = require('mongoose');
const dotenv = require('dotenv');

mongoose.set('strictQuery', false);
dotenv.config();

module.exports = {
  dbconnect: () => {
    mongoose
      .connect(process.env.MONGO_URL || 'mongodb://localhost:27017/paw_print', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log('database connected successfully');
      })
      .catch((error) => {
        console.log(`error occured ${error}`);
      });
  },
};
