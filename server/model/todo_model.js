const mongoose = require('mongoose');
const db = require('../config/db');
const userModel = require('../model/user_model')
const { Schema } = mongoose;


const todoSchema = new Schema({



    userId: {
        type: Schema.Types.ObjectId,
        ref: userModel.modelName,
    },


    title: {
        type: String,
        required: true,

    },

    desc: {
        type: String,
        required: true,
    }

});



const ToDoModel = db.model('todo', todoSchema);
module.exports = ToDoModel;