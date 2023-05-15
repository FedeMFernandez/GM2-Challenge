const express = require('express');
const authRouter = require('./auth/auth.router');

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the GM2 Interview!');
});

// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRouter);

// Middlewares

module.exports = app;
