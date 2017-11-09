var express = require("express");
var app = express();

// Routes
app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    var speak;
    if(animal == "pig") {
        speak = "'Oink'";
    }
    else if(animal == "cow") {
        speak = "'Moo'";
    }
    else if(animal == "dog") {
        speak = "'Woof! Woof!'"
    }
    res.send("The " + animal + " says " + speak);
});

app.get("/repeat/:str/:num", function(req, res) {
    var str = req.params.str;
    var num = req.params.num;
    var output = "";
    
    for(var i = 0; i < num; i++) {
        output += str + " ";
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