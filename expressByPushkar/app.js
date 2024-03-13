const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello from This side");
})

app.get("/about", (req, res) => {
  // res.send("Hello this is Pushkar");
  res.write("<h1>Hello this is Pushkar</h1>");
  res.send();
});

app.get("/contact", (req, res) => {
  res.send("contact on this no:- 1234567890");
});

app.get("/skills", (req, res) => {
  res.send("Backend developer and solidity developer");
});

app.get("/temp", (req, res) => {
  res.send({
    name: "Pushkar",
    RegNo: "21BCE11000"
  });
});


app.listen(3000, () => {
    console.log("Listening the port at 3000");
});