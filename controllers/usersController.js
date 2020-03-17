const UserModel = require('./../models/User')
exports.getUsers = (req, res, next) => {
  // Schreib hier code um alle Kunden aus der users-Collection zu holen
  var users = UserModel.find()
  res.status(200).send(users);
};

exports.getUser = (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um den Kunden mit der id aus params aus der users-Collection zu holen
  var user = UserModel.findById(id)
  res.status(200).send(user);
};

exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um den Kunden mit der id aus params aus der users-Collection zu löschen
  const user = UserModel.findByIdAndDelete(id)
  res.status(200).send(user);
};

exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  // Schreib hier code um den User mit der id aus params in der users-Collection mit den Daten aus req.body zu aktualisieren
  var user = UserModel.findByIdAndUpdate(id,dt)
  res.status(200).send(user);
};

exports.addUser =async (req, res, next) => {
  const user = req.body;
  // Schreib hier code um die Daten des neuen Kunden aus req.body in der users-Collection zu speichern
  const newUser = new UserModel(user)
  await newUser.save()
  res.status(200).send(user);
};

