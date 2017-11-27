var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({ // define schema
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema); // compile schema into a model



// adding a new cat to the DB
// var george = new Cat({
//     name: "Luna",
//     age: 1,
//     temperament: "Chill"
// });

// george.save(function(err, cat) {
//     if(err) {
//         console.log("Something went wrong... " + err);
//     }
//     else {
//         console.log("We just saved a cat to the database");
//         console.log(cat);
//     }
// });

Cat.create({
    name: "Leo",
    age: 9,
    temperament: "Independent"
}, function(err, cat) {
    if(err) {
        console.log(err);
    }
    else {
        console.log(cat);
    }
});

// retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats) {
    if(err) {
        console.log("Error: " + err);
    }
    else {
        console.log("All cats:");
        console.log(cats);
    }
});