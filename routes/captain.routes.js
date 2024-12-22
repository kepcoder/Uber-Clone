const express = require('express');
const {body} = require('express-validator')
const router = express.Router()
const captainController = require('../controllers/captain.controller')
const captainMiddleware = require('../middlewares/captain.middleware')

router.post('/register',[
   body('fullname.firstName').isLength({minlength:3}).withMessage('Firstname must be greater than 3 characters'),
   body('fullname.lastName').isLength({minlength:3}).withMessage('Firstname must be greater than 3 characters'),
   body('email').isEmail().withMessage('Email is not valid '),
   body('password').isLength({minlength:6}).withMessage('password must be greater than 6 characters'),
   body('vehicle.colour').isLength({minlength:3}).withMessage('Colour must be greater than 3 characters'),
   body('vehicle.plate').isLength({minlength:3}).withMessage('Colour must be greater than 3 characters'),
   body('vehicle.capacity').isInt({minlength:1}).withMessage('capacity must be greater than 0'),
   body('vehicle.vehicleType').isIn(['car', 'motorCycle', 'Auto']).withMessage('Invalid vehicle Type')

],
captainController.registerCaptain
)
router.post('/login',[
 body('email').isEmail().withMessage('Invalid Email'),
 body('password').isLength({minlength:6}).withMessage('Password Must be greater than 6 characters')
],
captainController.captainLogin
)
router.get('/profile',captainMiddleware.captainProfile,captainController.captainProfile )
router.get('/logout',captainMiddleware.captainProfile,captainController.captainLogout )

module.exports = router;