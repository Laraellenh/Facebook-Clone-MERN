// import express and make it  a function
const express = require("express");
const cors = require("cors");
const app = express();
const options = {
  origin: "http://localhost:3000",
  useSuccessStatus: 200,
}
// create the endpoints
app.use(cors(options));
app.get("/", (req, res) => {
  res.send("welcome from home");
});
app.get("/books", (req, res) => {
  res.send("welcome to books");
});
// listen on port 8000
app.listen(8000, () => {
  console.log("server is listening...");
});
