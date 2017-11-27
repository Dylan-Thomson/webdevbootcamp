var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({ // define schema
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema); // compile schema into a model



// adding a new cat to the DB

// retrieve all cats from the DB and console.log each one