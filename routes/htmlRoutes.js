const path = require("path");

const router = require("express").Router();

router.get("/notes", function (req, res) {
    res.sendFile(path.resolve(__dirname, "../public/notes.html"))

});
router.get("*", function (req, res) {
    // console.log("reached route")
    res.sendFile(path.resolve(__dirname, "../public/index.html"))

});
module.exports = router;