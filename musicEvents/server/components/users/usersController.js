const mongoose = require('mongoose');
const User = require('./userModel');

// Ako su potrebne provere forme zahteva sa klijenta onda koristimo ovu listu
// fieldList = ["name", "surname", "username", "password"];

module.exports.getUsers = async function (req, res, next){
    try{
      const users = await User.find({}).exec();
      res.status(200).json(users);
    }catch (err){
      next(err);
    }
};

module.exports.getUserById = async function (req, res, next){
  const userId = req.params.userId;

  try{
    const user = await User.findById(userId).exec();
    if(user){
      res.status(200);
      res.json(user);
    }else{
      res.status(404);
      res.json({message : "The user does not exist!"});
    }
  }catch(err){
    next(err);
  }
};

module.exports.createUser = async function (req, res, next){
  const userObj = {
    _id : new mongoose.Types.ObjectId(),
    name : req.body.name,
    surname : req.body.surname,
    username : req.body.username,
    password : req.body.password
  };

  const newUser = new User(userObj);

  try{
    const savedUser = await newUser.save();
    res.status(201).json({message : "User:" + savedUser._id + " is created!" , user : savedUser});
  }catch(err){
    next(err);
  }
};

module.exports.updateUserById = async function (req, res, next){
  
  const userId = req.params.userId;
  updateOptions = {};
  for(let i = 0; i < req.body.length;i++){
    // TODO (provera ispravnosti tela reqesta...)
    let singleUpdate = req.body[i];
    updateOptions[singleUpdate.fieldName] = singleUpdate.newValue;
  }
  
  try{
    await User.updateOne({_id : userId},{$set : updateOptions}).exec();
    res.status(200).json({message : "User updated!"});
  }catch(err){
    next(err);
  }
};

module.exports.deleteUserById = async function (req, res, next){
  
  const userId = req.params.userId;

  try{
    await User.deleteOne({_id : userId}).exec();
    res.status(200).json({message : "User deleted!"});
  }catch(err){
    next(err);
  }
};

module.exports.logIntCheck = async function (req, res, next){
  const user = req.body.username;
  const pass = req.body.password;
  
  try{
    const found = await User.findOne({username : user, password : pass}).exec();
    if(found){
      res.status(200).json({
        message : "User:" + found._id + " is logged in!",
        user : found
      });
    }else{
      // ne znam da li treba ovaj status za gresku
      res.status(404).json({
        message : "User do not exists!",
        user : null
      });
    }
  }catch(err){
    next(err);
  }
}
