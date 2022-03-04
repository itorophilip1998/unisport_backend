const jwt = require('jsonwebtoken');
const User = require('../model/User');
require('dotenv').config();
const {TOKEN_SECRET}=process.env;

exports.generateAccessToken = (user) => {
  
    const token = jwt.sign(user, TOKEN_SECRET);
     return token
} 

exports.authenticateToken=(req, res, next)=>{
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, TOKEN_SECRET , (err, user) => { 
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

exports.auth=(req)=>{
 console.log(req)
//    const user=User.findById(req.user._id)
//    return user;
}
exports.logout=(req)=>{  
  jwt.destroy(req.token)
}

