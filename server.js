const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const { DB_HOST, PORT = 3001 } = process.env;

// app.listen(PORT, () => {
//   console.log('Server running. Use our API on port: 3000');
// });
mongoose.set('strictQuery', false);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log('Server running');
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
