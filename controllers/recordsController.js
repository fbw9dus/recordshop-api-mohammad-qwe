
const Record = require('./../models/Record')

exports.getRecords = async (req, res, next) => {
  // Schreib hier code um alle records aus der records-Collection zu holen
 var records = await Record.find()
  res.status(200).send(records);
};

exports.getRecord =async (req, res, next) => {
  const { id } = req.params.id;

  // Schreib hier code um das record mit der id aus params aus der records-Collection zu holen
var record = await Record.findById(id)
  res.status(200).send(record);
};

exports.deleteRecord =async (req, res, next) => {
  const { id } = req.params.id;

  // Schreib hier code um das record mit der id aus params aus der records-Collection zu löschen
var record = await Record.findByIdAndDelete(id)
  res.status(200).send(record);
};

exports.updateRecord =async (req, res, next) => {
  const { id } = req.params.id;

  const dt = req.body;
  // Schreib hier code um das record mit der id aus params in der records-Collection mit den Daten aus req.body zu aktualisieren
 const record =  await Record.findOneAndUpdate(id,dt)

  res.status(200).send(record);
};

exports.addRecord =async (req, res, next) => {
  const data = req.body;
  // Schreib hier code um die Daten des neuen record aus req.body in der records-Collection zu speichern
  var record = new Record(data);
 await  record.save()
  res.status(200).send(record);
};
