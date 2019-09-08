const express = require('express');
const app = express();
const mongoose = require('mongoose');
const apiRouter = require('./routes/apiRouter');
const dotenv = require('dotenv');

dotenv.config();
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log('connected to DB')
);

app.use(express.json());
app.use('/api', apiRouter);

app.listen(3000, () => console.log('Server is listening...'));
