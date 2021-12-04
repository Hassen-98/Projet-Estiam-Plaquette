const router = require('express').Router()
const userController = require("../controllers/user.controller"); 

const { userRegister, userLogin, userAuth, serializeUser, checkRole} = require('../utils/Auth')


//CRUD USERS
router.get("/all",  userController.getAllUsers); 
router.get("/:id", userController.getByIdUser); 
router.patch("/:id", userAuth, checkRole(["superadmin"]),userController.updateUser); 
router.delete("/:id", userAuth, checkRole(["superadmin"]), userController.deleteUser);

//Enregistrement admin et superadmin
router.post('/signup/superadmin', userAuth, checkRole(["superadmin"]), async (req, res) => {
    await userRegister(req.body,"superadmin", res);
})

//Enregistrement admin et superadmin
router.post('/signup/admin', userAuth, checkRole(["superadmin"]),async (req, res) => {
    await userRegister(req.body,"admin", res);
})

//connection administrateur
router.post('/signin/superadmin', async (req, res) => {
   await userLogin(req.body,"superadmin", res);
})

router.post('/signin/admin', async (req, res) => {
    await userLogin(req.body, "admin", res);
 })
 


//Route Profile
router.get("/profil", userAuth, async (req, res) => {
    return res.json(serializeUser(req.user));
  });


//protection administrateur
router.get('/admin-protected', userAuth, checkRole(["admin"]),async (req, res) => {
    return res.json("Votre profil est : Admin");
})

//protection super-administrateur
router.get('/superadmin-protected', userAuth, checkRole(["superadmin"]), async (req, res) => {

   return res.json("Votre profil est : Admin");
})

module.exports = router;
