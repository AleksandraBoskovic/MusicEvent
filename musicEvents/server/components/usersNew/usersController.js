const mongoose = require('mongoose');
const User = require('./userModel');

//ucitavamo bcrypt biblioteku
const bcrypt = require('bcrypt');
const saltRounds = 12;


async function checkPassword(password,hashPassword) {

  const match = await bcrypt.compare(password, hashPassword);
  return match;
}

// PUT-registracija
module.exports.register = async function (req, res, next){

    // provera parametara tela zahteva
    if(!req.body.name || !req.body.surname || !req.body.username || !req.body.password || !req.body.email || !req.body.phone){
        res.status(400).json({message : "badBodyParams"});
        return;
    }

    // sprecavamo 2 usera sa istim username-om ili password-om 
    const sameUsername = await User.findOne({username : req.body.username}).exec();

    if(sameUsername){
      res.status(400).json({message : "usernameExists"});
      return;
    }

    const users = await User.find({}).exec();
    // let samePassInd = false;
    for(let user of users){
      if( (await checkPassword(req.body.password,user.password)) === true){
        res.status(400).json({message : "passwordExists"});
        return;
      }
    }

    bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
      const userObj = {
        _id : new mongoose.Types.ObjectId(),
        administrator : false,
        name : req.body.name,
        surname : req.body.surname,
        username : req.body.username,
        password : hash,
        email : req.body.email,
        phone : req.body.phone
      };
    
      const newUser = new User(userObj);
    
      try{
        const savedUser = await newUser.save();
        res.status(201).json({message : "successfullyCreated", user : savedUser});
      }catch(err){
        next(err);
      }
    });

};



// POST- logovanje
module.exports.login = async function (req, res, next){
  const userName = req.body.username;
  const pass = req.body.password;
  
  try{
    const found = await User.findOne({username : userName}).exec();
    if(found){
      // decrypt password 
      bcrypt.compare(pass, found.password, function(err, result) {
        if(result){
          req.session.user = found;
          res.status(200).json({
            message : "User is logged in",
            user : found
          });
        }else{
          res.status(404).json({
            message : "User do not exists",
            user : null
          });
        }
      });
    }else{
      res.status(404).json({
        message : "User do not exists",
        user : null
      });
    }
  }catch(err){
    next(err);
  }
}

// GET - rad sa sesijama i dohvatanje aktivnog usera 
module.exports.getlogin = async function (req, res){
  console.log(req.session.user);
  req.session.user ? res.status(200).json({loggedIn: true,user : req.session.user}) : res.status(200).json({loggedIn: false});
}


// POST - logout 
module.exports.logout = async function (req,res){
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send('Could not log out.');
      } else {
        res.status(200).send({});
      }
    });
}

// PATCH - User update 
module.exports.updateUser = async function (req,res){

  if(req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).json({message:"bad request/missing body params"});
    return;
  }

  const userId = req.params.userID;
  updateOptions = {};
  for(let i = 0; i < req.body.length;i++){
    let singleUpdate = req.body[i];
    updateOptions[singleUpdate.fieldName] = singleUpdate.newValue;
  }
  try{
    const resp = await User.updateOne({_id : userId},{$set : updateOptions}).exec();
    if(resp.nModified == 0 && resp.n == 0){
      res.status(400).json({message:"bad userId"});
      return;
    }
    const updated = await User.findById(userId).exec();
    res.status(200).json({message : "User updated",user : updated});
  }catch(err){
    res.status(400).json({message:"bad request"});
    next(err);
  }
}

// PUT - pravljenje administratora
module.exports.createAdministrator = async function (req,res) {
      // provera parametara tela zahteva
    if(!req.body.name || !req.body.surname || !req.body.username || !req.body.password || !req.body.email || !req.body.phone){
      res.status(400).json({message : "badBodyParams"});
      return;
    }

    // sprecavamo 2 administratora sa istim username-om ili password-om 
    const sameUsername = await User.findOne({username : req.body.username}).exec();

    if(sameUsername){
        res.status(400).json({message : "usernameExists"});
        return;
    }


    const users = await User.find({}).exec();
    // let samePassInd = false;
    for(let user of users){
      if( (await checkPassword(req.body.password,user.password)) === true){
        res.status(400).json({message : "passwordExists"});
        return;
      }
    }

    
     // hesiranje passwrod-a 
    bcrypt.hash(req.body.password, saltRounds, async function(err, hash) {
      const adminObj = {
        _id : new mongoose.Types.ObjectId(),
        administrator : true,
        name : req.body.name,
        surname : req.body.surname,
        username : req.body.username,
        password : hash,
        email : req.body.email,
        phone : req.body.phone
      };
    
      const newAdmin = new User(adminObj);
    
      try{
        const savedAdmin = await newAdmin.save();
        res.status(201).json({message : "successfullyCreated", admin : savedAdmin});
      }catch(err){
        next(err);
      }      
    });
}