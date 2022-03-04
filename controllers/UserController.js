const { generateAccessToken, auth } = require("../middleware/auth");
const User = require("../model/User");
const bcrypt= require('bcryptjs')
const admin = {
  username: "admin",
  email: "unisport@admin.com",
  password: "admin",
  repeat_password: "admin",
};

exports.signup = async (req, res) => {  
 try {
       await User.create(admin)
         .then((result) => {
            const token = generateAccessToken(result.email);
           res.json({ user, token });      
            
         })
         .catch((err) => {
           res.send(err);
         });
 } catch (error) {
    
 } 
}

exports.signin = async (req, res) => {
  try {
      const { email, password } = req.body;
     const user = await User.findOne({ email })
     const getPassword = await bcrypt.compareSync(password, user.password);
      if (!getPassword || !user) res.status(401).send("Unauthorized");
      const token = generateAccessToken(user.email);
      res.json({ user, token });      

  } catch (error) {
     
  }

    
}
exports.signout = (req, res) => {
   try {
    logout(req); 
       
   } catch (error) {
      
   }
}
exports.me=async(req,res)=>{ 
   try {
    const auth = await User.findOne(req.email);
    res.send(auth); 
} catch (error) {
   
}
} 
exports.index = (req, res) => { 
   try {
    res.send("Hello API!");
      
   } catch (error) {
      
   }
} 
