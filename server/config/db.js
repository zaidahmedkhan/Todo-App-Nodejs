const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017').on('open', () => {
    console.log('mongo db connected');
}).on('error', () => {
    console.log("mongo db connection error");
});
module.exports = connection;