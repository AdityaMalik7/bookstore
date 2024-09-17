import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { bookRoute } from "./routes/book.route.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/books", bookRoute);
app.get("/", (req, res) => {
  res.send("Hello API SERVER");
});
const port = process.env.PORT || 3000;
mongoose
  .connect(
    "mongodb+srv://adityamalikm67:Hx3CYvsZtkM0S8nD@cluster0.lhjpd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`localhost  is running on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection Failed.");
  });
