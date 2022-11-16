const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const journalRoute = require('./routes/journals');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/pizza-hunt-db',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () =>
{
    console.log("Connected to database.");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/journals', journalRoute);

app.listen(8800, () =>
{
    console.log("Listening on port 8800.")
});