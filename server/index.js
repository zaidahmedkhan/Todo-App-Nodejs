const app = require('./app');

const port = 3000;

app.get('/', (req, res) => {

    res.send("Hello from node js server! ");
});

app.listen(port, () => {
    console.log("server is connected!");
});