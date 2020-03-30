const express = require("express");
const router = express.Router();
const { check} = require('express-validator');
//const low = require("lowdb");
//const FileSync = require("lowdb/adapters/FileSync");
//const adapter = new FileSync("data/db.json");
//const db = low(adapter);
const {userValidationRules} = require('../lib/validation/userRules')
const {validateInputs} = require('./../middleware/validateInputs')

const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser
} = require("../controllers/usersController");

router
  .route("/")
  .get(getUsers)
  .post(validateInputs(userValidationRules), addUser);

router
  .route("/:id")
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = router;