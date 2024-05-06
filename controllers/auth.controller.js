import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

export const login = async (req, res) => {
  const {username, password} = req.body;

  const user = await User.findOne({ username });
  console.log(user);

  const isPasswordGood = await bcrypt.compare(password, user.password);
  console.log(isPasswordGood); 
  if(isPasswordGood) {
    const payload = {
     role: user.role,
     username: user.name,
     name: user.name
    };
    const token = jwt.sign(payload, "KEY123");
    res.cookie("token", token, {httpOnly: true});

    res.send();
  }
}; 