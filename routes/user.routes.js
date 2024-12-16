const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const userController = require('../controllers/user.controller')

router.post('/register',[
    body('email').isEmail().withMessage("Invaid Email"),
    body('fullname.firstName').isLength({min:3}).withMessage('First name is must be greater than 3 characters '),
    body('password').isLength({min:6}).withMessage('Password must be greater than 6 characters')
],
  userController.registerUser
)


module.exports = router;