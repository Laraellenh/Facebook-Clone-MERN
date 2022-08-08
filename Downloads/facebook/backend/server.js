// import express and make it  a function
const express =require("express");
const app = express();
// create the endpoints
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
