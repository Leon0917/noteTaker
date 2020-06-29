
var express = require("express");

var app = express();


// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
