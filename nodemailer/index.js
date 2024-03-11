const express = require('express');
const app = express();

const mail = require("./controller/mail");

app.get('/', (req, res) => {
    res.send("Welcome!");
});

app.get("/email", mail);

const start = async () => {
    try {
        app.listen(3000, () => {
            console.log("Hello");
        });
    } catch (error) {
        
    }
};



start();
