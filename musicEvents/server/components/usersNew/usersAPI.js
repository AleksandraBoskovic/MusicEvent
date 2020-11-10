const controler = require('./usersController');
const express = require('express')
const router = express.Router();

const bodyRequiredMiddleware = (req,res,next) => { 
    if(req.body){
      next();
    }else{
      res.status(403).json({message : "Body is required"});
    }
};

// Registracija - PUT
router.put('/',bodyRequiredMiddleware,controler.register);
// Logovanje - POST
router.post('/login',bodyRequiredMiddleware,controler.login);
// Logovanje - GET login
router.get('/login',controler.getlogin);
// Post - logout
router.post('/logout',controler.logout);
//Update user - Patch
// kao req.body ocekuje se lista mapa oblika [{	"fieldName":"name","newValue":"Ilija"},	{"fieldName":"surname","newValue":"Markovic"}]
router.patch('/:userID',bodyRequiredMiddleware,controler.updateUser);
// Kreiranje administratora - PUT
router.put('/administrator',bodyRequiredMiddleware,controler.createAdministrator);


module.exports = router;
