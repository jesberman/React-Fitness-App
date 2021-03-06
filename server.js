//Dependencies
var express = require("express");
var mongojs = require("mongojs");


//Initialize Express
var app = express();

//Set up a static folder (public) for our web app
app.use(express.static("database_page"));

//Database configuration
//Save the URL of our database as well as the name of our collection
var databaseUrl = "newDatabase";
var collections = ["fitnessJournal"];

//Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function (error) {
  console.log("Database Error", error);
});

// Routes
// 1. At the root path, send a simple hello world message to the browser
app.get("/", function (req, res) {
  res.send("Hello world");
});

// 2. At the "/all" path, display every entry in the animals collection
app.get("/all", function (req, res) {
  // Query: In our database, go to the animals collection, then "find" everything
  db.fitnessJournal.find({}, function (error, found) {
    // Log any errors if the server encounters one
    if (error) {
      console.log(error);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});



app.post("/submit", function (req, res) {
  console.log(req.body);
  // Insert the note into the notes collection
  db.fitnessJournal.insert(req.body, function (error, saved) {
    // Log any errors
    if (error) {
      console.log(error);
    }
    else {
      // Otherwise, send the note back to the browser
      // This will fire off the success function of the ajax request
      res.send(saved);
    }
  });
});




//Set the app to listen on port 3000
app.listen(3000, function () {
  console.log("App running on port 3000!");
})



//added on advice of https://medium.freecodecamp.org/i-built-this-now-what-how-to-deploy-a-react-app-on-a-digitalocean-droplet-662de0fe3f48
app.use( express.static( `${__dirname}/../build` ) );

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})


