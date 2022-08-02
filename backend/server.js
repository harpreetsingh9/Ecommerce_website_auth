import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});
const port = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}
app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
