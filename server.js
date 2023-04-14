const mongoose = require('mongoose');

const app = require('./app');

const DB_URI =
  'mongodb+srv://Eric:Q3zZfcToRMPrcfu0@cluster0.m5tfpto.mongodb.net/db-contacts?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(3000);
    console.log('Database connection successful');
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

// app.listen(3000, () => {
//   console.log('Server running. Use our API on port: 3000');
// });
