import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
    },
    email: {
      type: String,
      required: [true, "can't be blank"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "can't be blank"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, "secret", {
    expiresIn: "7d",
  });
  return token;
};
const User = mongoose.model("User", userSchema);

export default User;
