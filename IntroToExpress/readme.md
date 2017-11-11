# Introduction to Express

* What is a framework? How is it different from a library?
    * Inversion of control
    * Both are external code you can include in your application
    * You call a library, but the framework calls you
    * Think of a framework like mad libs, where you fill in the missing parts
* What is Express?
    * Web development framework for Node
    * Other frameworks: Flask, Rails, Sails
* Why are we using Express?
    * Most popular Node framework - big community
    * Very lightweight (lots of blanks to fill in on your own)
    * As opposed to Rails which is heavyweight (it does a lot for you)
    * Lightweight means we will learn a lot more about how things work

# Our First Express App

* Review and existing app (DogDemo)
* Review HTTP response/request lifecycle
* Create our own simple Express app
* 


# NPM Init and Package.json
* Use the '--save' flag to install packages
    * Take package name and version and save it into package.json
* Explain what the package.json file does
    * Holds metadata about the project
    * Contains dependencies which are a recipe of ingredients needed for the library
* Use 'npm init' to create a new package.json

# More Routing
* Show the '*' route matcher
* Write routes containing route parameters
    * Use : to match a pattern
* Discuss route order
    * First route that matches is the only one that is run
    * So the catchall route would override everything if defined first