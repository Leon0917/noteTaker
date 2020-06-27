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



router.post("/api/notes", function (req, res) {

  if (tableData.length < 5) {
    tableData.push(req.body);
    res.json(true);
  }
  else {
    waitListData.push(req.body);
    res.json(false);
  }
});
module.exports = router;

// Hints:
// Have an array of note
// new note = req.body
// push new note into array of note 
// do fs write file which takes in path(db.jason) and data gitarray of note

