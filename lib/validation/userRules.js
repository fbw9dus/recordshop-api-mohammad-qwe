
const { check} = require('express-validator');

exports.userValidationRules =[
    check('email').isEmail(),
    check('firstName').isLength({ min: 3 })
]
 // username must be an email
 //check('username').isEmail(),
 // password must be at least 5 chars long
 //check('password').isLength({ min: 5 })