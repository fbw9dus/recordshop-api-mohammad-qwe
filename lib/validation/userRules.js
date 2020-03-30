
const { check} = require('express-validator');

exports.userValidationRules =[
    check('email').isEmail()
    .withMessage('Bitte prüf deine Email-Adresse'),
    check('firstName')
    .exists()
    .withMessage('Bitte Firstname ist ein Pflichtfeld'),
    check('password')
    .isLength({min: 10})
    
]
 // username must be an email
 //check('username').isEmail(),
 // password must be at least 5 chars long
 //check('password').isLength({ min: 5 })