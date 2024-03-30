const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const corse = require("cors");
app.use(corse());

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, (err) => {
      if (err) {
        console.log("error in server setup", err);
      } else {
        console.log("Server is running on port", process.env.PORT);
      }
    });
  })
  .catch((err) => {
    console.log("error in connecting to MongoDB", err);
  });
app.use(userRoutes);
