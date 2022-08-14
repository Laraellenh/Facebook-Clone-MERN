// import express and make it  a function
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const {readdirSync} = require("fs");
const dotenv = require("dotenv");
dotenv.config();
app.use(cors());
app.use(express.json());
// routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/"+r)));
const PORT = process.env.PORT || 8000;
// synchronously read the contents of a directory in node The method returns an array with all the file names or objects in the directory. The options argument can be used to change the format in which the files are returned from the method.
// Syntax:fs.readdirSync( path, options )
// dynamically add routes by mapping the array our routes!

//db
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log("error connecting to mongodb", err));

app.listen(PORT, () => {
  console.log(`server is on port ${PORT}`);
});