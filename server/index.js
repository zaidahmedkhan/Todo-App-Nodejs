const app = require('./app');
const db = require('./config/db');
const userModel = require('./model/user_model');
const ToDoModel = require('./model/todo_model');


const port = 3000;

app.get('/', (req, res) => {

    res.send("Hello from node js server! ");
});

app.listen(port, () => {
    console.log("server is connected!");
});