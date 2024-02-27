//this line imports express:
const express = require("express");
//this line imports the getQuote function from the node-quotegen:
const { getQuote } = require("node-quotegen");

//this line creates an Express application instance by calling the express():
const app = express();

//This line defines a route for handling GET requests to the path /api/quote. When a GET request is made to this path, it invokes the callback function (req, res) => {...}. Inside the callback function, it calls the getQuote() function to retrieve a random quote and sends the quote back to the client as a JSON response using res.json():
app.get("/api/quote", (req, res) => {
    const quote = getQuote();
    res.json({ quote });
});

//This line defines another route for handling GET requests to paths like /api/quote/someCategory. It uses a route parameter :category to capture the category specified in the URL. Inside the callback function, it calls the getQuote() function with the category extracted from req.params.category, retrieves a random quote from that category, and sends it back to the client as a JSON response:
app.get("/api/quote/:category", (req, res) => {
    const quote = getQuote(req.params.category);
    res.json( `Have a nice day :) 🥰 ${quote}` );
})

//This line starts the Express server, making it listen for incoming requests on port 3000. It calls the listen() method on the Express application instance (app), specifying the port number (3000) and a callback function to be executed once the server starts listening. Inside the callback function, it logs a message to the console indicating that the server is listening on port 3000:
app.listen(3000, () => {
    console.log("Server listening on port 3000")
})

//http://localhost:3000/api/quote/