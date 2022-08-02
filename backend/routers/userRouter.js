import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    if (!bcrypt.compareSync(req.body.password, user.password))
      return res.status(401).send({ message: "Invalid Email or Password" });

    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret"
    );
    res.status(200).send({ data: token, message: "logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }

  // res.send({ token });
  // return res
  //   .status(200)
  //   .send({ data: token, message: "User logged in successfully!" });
  // res.send({
  //   _id: user._id,
  //   name: user.name,
  //   email: user.email,
  //   isAdmin: user.isAdmin,
  //   //   token: generateToken(user),
  // });
  // return;
  // }
  // }
  // res.send(401).send({ message: "Invalid email or password" });
});
userRouter.post("/register", async (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  const createdUser = await user.save();
  const token = jwt.sign(
    {
      name: createdUser.name,
      email: createdUser.email,
    },
    "secret"
  );
  res.send({ token });
  // return res.status(200).send({ data: token, message: "User Registered!" });
  // res.json({ status: "ok", createdUser: token });
  // res.send({
  //   _id: createdUser._id,
  //   name: createdUser.name,
  //   email: createdUser.email,
  //   isAdmin: createdUser.isAdmin,
  //   //   token: generateToken(createdUser),
  // });
});

export default userRouter;
