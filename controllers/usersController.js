const User = require('../models/User')

exports.getUsers = async (req, res, next) => {
  // Schreib hier code um alle Kunden aus der users-Collection zu holen
  const users =await User.find()
  res.status(200).send(users)
};

exports.getUser = async (req, res, next) => {
  const id  = req.params.id;
  // Schreib hier code um den Kunden mit der id aus params aus der users-Collection zu holen
  const user =await User.findById(id)
  res.status(200).send(user);
};

exports.deleteUser = async (req, res, next) => {
  const { id } = req.params.id;
  // Schreib hier code um den Kunden mit der id aus params aus der users-Collection zu löschen
  const user =await User.findByIdAndDelete(id)
  res.status(200).send(user);
};

exports.updateUser = async (req, res, next) => {
  const { id } = req.params.id;
  const dt = req.body;
  // Schreib hier code um den User mit der id aus params in der users-Collection mit den Daten aus req.body zu aktualisieren
  const user =await User.findByIdAndUpdate(id,dt)
  res.status(200).send(user);
};

exports.addUser = async (req, res, next) => {
  const userData = req.body;
  // Schreib hier code um die Daten des neuen Kunden aus req.body in der users-Collection zu speichern
  
  const user = new User(userData)
  await user.save()
  res.status(200).send(user);
};
