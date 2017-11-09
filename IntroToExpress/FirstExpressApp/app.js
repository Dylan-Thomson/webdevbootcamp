var express = require("express");
var app = express();

// Routes
app.get("/", function(req, res) {
    res.send("Hi there!");
});

app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog");
    res.send("Woof!");
});

app.get("/r/:subredditName", function(req, res) {
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
    res.send("Welcome to the thread for " + req.params.title);
});

// Undefined routes - needs to be called after all defined routes
app.get("*", function(req, res) {
    res.send("You are a star!");
});

// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started.");
});