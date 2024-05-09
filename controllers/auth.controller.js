import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

export const login = async (req, res) => {
  const {username, password} = req.body;

  const user = await User.findOne({ username });
  if(!user) {
    return res.status(401).send("Invalid");
  }

  const isPasswordGood = await bcrypt.compare(password, user.password);
  
  if(isPasswordGood) {
    const payload = {
     role: user.role,
     username: user.name,
     name: user.name
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    res.cookie("token", token, {httpOnly: true});

    res.send();
  }
}; 