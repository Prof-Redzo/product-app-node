import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies["token"]; 

  if(!token) {
   return res.status(401).send("Unauthorized");
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data;

    next();
  } catch (e) {
    return res.status(403).send("Unverified");
  }
};

export default verifyToken;