var express = require("express");
var app = express();

// Routes
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animals = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof! Woof!",
        cat: "Meow",
        goldfish: "..."
    }
    var animal = req.params.animal.toLowerCase();
    
    res.send("The " + animal + " says '" + animals[animal] + "'");
});

app.get("/repeat/:msg/:times", function(req, res) {
    var msg = req.params.msg;
    var times = Number(req.params.times);
    var output = "";
    
    for(var i = 0; i < times; i++) {
        output += msg + " ";
    }
    
    res.send(output);
});

app.get("*", function(req, res) {
   res.send("Sorry, page not found...What are you doing with your life?"); 
});



// Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started.");
});