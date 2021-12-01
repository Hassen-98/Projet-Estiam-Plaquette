const router = require('express').Router()
const userController = require("../controllers/user.controller");

const { userRegister, userLogin } = require('../controllers/auth.controller')


//Enregistrement administrateur
router.post('/signup', async (req, res) => {
    await userRegister(req.body, "admin" | "superadmin", res);

})


//connection administrateur
router.post('/signin', async (req, res) => {
    await userLogin(req.body, "admin", res);

})

//connection super-administrateur
router.post('/login-super-admin', async (req, res) => {
      await userLogin(req.body, "superadmin", res);
})

//GetAll()
router.get("/all", userController.getAllUsers);

//GetbyId
router.get("/:id", userController.userInfo);

//Update
router.put("/:id", userController.updateUser);

//Delete
router.delete("/:id", userController.deleteUser);

//protection utilisateur
router.post('/user-protected', async (req, res) => {
    
  //  return res.json("Bonjour utlisateur");
})


//protection administrateur
router.post('/admin-protected',async (req, res) => {
   // return res.json("Bonjour Admin");

})

//protection super-administrateur
router.post('/super-admin-protected', async (req, res) => {

   // return res.json("Bonjour Super Admin");
})


module.exports = router;

/*
const {
 
    userLogin,
    userRegister,
    userAuth,
    validateRole,
    serializeUser  
    } = require("../utils/authentification");*/