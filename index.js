import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth-routes.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cookieParser());

mongoose 
.connect("mongodb://127.0.0.1:27017/productApp")
.then(() => console.log("Connected"))
.catch(() => console.error("Could not connect to DB"));

app.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("Working");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () =>{
  console.log("Running on port", PORT);
})