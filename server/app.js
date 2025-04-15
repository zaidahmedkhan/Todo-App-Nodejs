const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routes/user_route');
const TodoRouter = require('./routes/todo_route');

const app = express();
app.use(bodyParser.json());

app.use('/', userRouter);
app.use('/', TodoRouter);

module.exports = app;