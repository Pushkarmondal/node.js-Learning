const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hi");
})

//alternative way:
app.get("/heymf", (req, res) => {
  res.status(200).send("welcome to heymf page");
});

app.get("/krsna", (req, res) => {
  res.status(200).send("welcome to kr$na fan page");
});

app.listen(3000, () => {
    console.log("listening on port 3000");
})