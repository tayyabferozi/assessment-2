require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Someone just visited!");
// });

app.use("/api/products/", require("./routes"));

let port = process.env.PORT || 5000;
let dbString = process.env.DB_STRING;

mongoose.connect(dbString).then(() => {
  app.listen(port, () => {
    console.log("Server started on port 5000");
  });
});

function mongoTasks() {
  // Product.insertMany([
  //   { name: "Shoes", price: 20 },
  //   { name: "Shirt", price: 30 },
  //   { name: "Pants", price: 25 },
  //   { name: "Glasses", price: 35 },
  // ]);
  // Product.find({ price: { $gt: 30 } }).then((foundProducts) => {
  //   console.log(foundProducts);
  // });
  // Product.findOne({ price: { $gt: 30 } }).then((foundProduct) => {
  //   console.log(foundProduct);
  // });
  // Product.create({
  //   name: "Ring",
  //   price: 5,
  // }).then((createdProd) => {
  //   console.log(createdProd);
  // });
  // Product.findByIdAndUpdate("617a1f5ed6208baf16a7526c", { price: 200 }).then(
  //   (updatedProd) => {
  //     console.log(updatedProd);
  //   }
  // );
  // Product.findById("617a1f5ed6208baf16a7526c").then(console.log);
  // Product.findByIdAndDelete("617a1f5ed6208baf16a7526c").then(console.log);
}

mongoTasks();
