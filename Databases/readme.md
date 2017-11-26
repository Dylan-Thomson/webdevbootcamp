# Databases

## Intro to Databases
* What is a database?
    * We need one for persistent data
    * A database is a collection of information/data
    * Has an interface that allows us to interact with this data
* SQL (relational) vs NoSQL (non-relational)
    * Relational have been around the longest
        * Tabular or flat
        * Not very flexible because every entry needs to follow the same pattern
        * Needs join tables
    * Non-relational is much more flexible
        * Not flat, can nest data
        * BSON is like a JS object with key-value pairs
        * One entry may have a favorite color while another has a favorite food

# Intro to MongoDB
* What is MongoDB?
* Why are we using it?
* Let's install it!
    * sudo apt-get install -y mongodb-org
    * mkdir data
    * echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod
    * chmod a+x mongod
    * ./mongod to start, ctrl+c to end
    * Run in separate terminal and work in another terminal