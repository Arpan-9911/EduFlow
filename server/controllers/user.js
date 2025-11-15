import User from '../models/user.js';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const googleLogin = async (req, res) => {
  try {
    const { name, email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ name, email });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};