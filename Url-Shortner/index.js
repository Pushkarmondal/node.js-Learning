const express = require('express');
const urlRoutes = require("./routes/url");
const { connect } = require('./connect');
const URL = require('./models/url');

const app = express();
const port = 3000;

connect("mongodb://localhost:27017/short-url")
    .then(() => {
        console.log("Mongodb connected");
    });

app.use(express.json());
app.use("/url", urlRoutes);

app.get("/:shortId", async(req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visit: {
                timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.reedirectURL);
})
app.listen(port, () => {
    console.log(`Surver running on port ${port}`);
});