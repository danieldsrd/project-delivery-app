const express = require('express');
const cors = require('cors');
const sessionsRouter = require('../routes/sessionsRouter');
const registerRouter = require('../routes/registerRouter');
const orderDetailsRouter = require('../routes/orderDetailsRouter');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/login', sessionsRouter);
app.use('/register', registerRouter);
app.use('/customer/orders', orderDetailsRouter);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
