const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello Express");
})

app.get("/logs", (req, res) => {
    res.send("logs output here");
})

app.get('/name', (req, res) => {
    const { name, age } = req.query;
    res.send(`my name is ${name} and age is ${age}`);
})
//to set name we can use this cURL = http://localhost:3000/name?name=Pushkar&age=20
app.get('/user:id', (req, res) => {
    const { id } = req.params;
    res.send(`User Id is ${id}`);
})

let port = 3000;
app.listen(3000, () => {
    console.log(`listening on port ${port}`);
})