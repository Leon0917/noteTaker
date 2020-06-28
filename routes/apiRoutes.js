var fs = require("fs");
const path = require("path");
const router = require("express").Router();


router.get("/notes", function (req, res) {
  fs.readFile(path.resolve(__dirname, "../db/db.json"), (err, data) => {
    if (err) {
      throw err
    }
    res.json(JSON.parse(data));
  })

});

// Post new notes and return new notes to client

router.post("/api/notes", function (req, res) {
  var newNotesArr = req.body;
  console.log(newNotesArr);
  newNotesArr.push(newNotesArr);
  // res.send("new notes added!");
  
  fs.writeFile(path.resolve(__dirname, "../db/db.json"), (err, data) => {
    if (err) {
      throw err
    }
    else{
      res.json(true);
    }
  })
}
);

// Function to delete notes from db.Json file and rewriting

router.delete('/api/notes/:_id', function (req, res) {
  var id = req.params._id;
  newNotesArr.removeNewNotesArr(id, function (err, newNotesArr) {
    if (err) {
      throw err;
    }
    res.json(newNotesArr);
  });
});

module.exports = router;

// Hints:
// Have an array of note
// new note = req.body
// push new note into array of note 
// do fs write file which takes in path(db.jason) and data gitarray of note







