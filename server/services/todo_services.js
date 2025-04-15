const ToDoModel = require('../model/todo_model');


class ToDoServices {

    static async createTodo(userId, title, desc) {

        const createTodo = new ToDoModel({ userId, title, desc });
        return await createTodo.save();

    }
}


module.exports = ToDoServices;