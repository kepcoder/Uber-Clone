const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')
const middleware = require("../middlewares/user.middleware")

router.post('/register',[ 
    body('email').isEmail().withMessage("Invaid Email"),
    body('fullname.firstName').isLength({min:3}).withMessage('First name is must be greater than 3 characters '),
    body('password').isLength({min:6}).withMessage('Password must be greater than 6 characters')
],
  userController.registerUser
)
router.post('/login',[
  body('email').isEmail().withMessage('Invalid Email'),
  body('password').isLength({min:6}).withMessage('password must be greater than 6 characters')
],
userController.loginUser
)
router.get('/profile', middleware.userAuth, userController.getUserProfile)
router.get('/logout', middleware.userAuth ,userController.logoutUser)


module.exports = router;