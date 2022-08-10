// import express and make it  a function
const express = require("express");
const cors = require("cors");
const app = express();
const {readdirSync} = require("fs");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
readdirSync("./routes").map((r) => app.use("/", require("./routes/"+r)));
const PORT = process.env.PORT || 8000;
// synchronously read the contents of a directory in node The method returns an array with all the file names or objects in the directory. The options argument can be used to change the format in which the files are returned from the method.
// Syntax:fs.readdirSync( path, options )
// dynamically add routes by mapping the array our routes!


app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});