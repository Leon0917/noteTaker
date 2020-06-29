var fs = require("fs");
const path = require("path");
const router = require("express").Router();
var db = require("../db/db.json");

router.get("/notes", function (req, res) {
  console.log("GET ROUTE")
  var fileread = fs.readFileSync("./db/db.json", (err, data) => {
    if (err) {
      throw err
    }
    console.log(err,data)
    db = JSON.parse(data);
    console.log("GET ROUTE",db)
    res.json(JSON.parse(data));
  })
  console.log("DB",db)
  res.json(db)
});

// Post new notes and return new notes to client

router.post("/notes", function (req, res) {
  var newNotesArr = {
    "id": Math.floor(Math.random() + db.length)+1,
    "title": req.body.title,
    "text": req.body.text
  }

  db.push(newNotesArr);
  // res.send("new notes added!");
  console.log(db);
  fs.writeFileSync("./db/db.json",JSON.stringify(db), (err, data) => {
    if (err) {
      throw err
    }
    res.json(db);
  })
}
);

// Function to delete notes from db.Json file and rewriting

router.delete('/notes/:id', function (req, res) {
  var id = req.params.id;
  console.log("Delete route",id)
  var array = [];
  for (let index = 0; index < db.length; index++) {
   if(db[index].id !=id){
       array.push(db[index])
   }
    
  }
  db = array;
  console.log(db);
  fs.writeFileSync("./db/db.json",JSON.stringify(db), (err, data) => {
    if (err) {
      throw err
    }
    res.json(db);
  })
});

module.exports = router;

// Hints:
// Have an array of note
// new note = req.body
// push new note into array of note 
// do fs write file which takes in path(db.jason) and data gitarray of note







