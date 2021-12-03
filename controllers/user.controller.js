const UserSchema = require("../models/user.model"); 
const ObjectID = require("mongoose").Types.ObjectId; 
 
module.exports.getAllUsers = async (req, res) => { 
    const users = await UserSchema.find().select("-password"); 
    res.status(200).json(users); 
  };

module.exports.userInfo = (req, res) => { 
    if (!ObjectID.isValid(req.params.id)) 
      return res.status(400).send("ID unknown : " + req.params.id); 
   
    UserSchema.findById(req.params.id, (err, docs) => { 
      if (!err) res.send(docs); 
      else console.log("ID unknown : " + err); 
    }).select("-password"); 
}; 