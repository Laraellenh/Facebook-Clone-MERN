// import express and make it  a function
const express = require("express");
const cors = require("cors");
const app = express();
// practice with securing  CORS
// const options = {
//   origin: "http://localhost:3000",
//   useSuccessStatus: 200,
// }
// let allowed = ["http://localhost:3000"];
// function options(req, res){
//   let tmp;
//   let origin= req.header("Origin");
//   if(allowed.indexOf(origin)> -1){
//     tmp={
//       origin: true,
//       optionSuccessStatus: 200,
//     };
//   } else {
//     tmp={
//       origin: "stupid",
//     };
//   }
//   res(null, tmp);
// }
// app.use(cors(options));
// create the endpoints
// less secure CORS for this project
app.use(cors());
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
