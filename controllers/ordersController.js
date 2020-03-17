
const orderModel = require('./../models/Order')

exports.getOrders =async (req, res, next) => {
  // Schreib hier code um alle Bestellungen aus der orders-Collection zu holen
 var order = await orderModel.find()
  res.status(200).send(order);
};

exports.getOrder =async (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um die Bestellung mit der id aus params aus der orders-Collection zu holen
 var order =  await orderModel.findById(id)
  res.status(200).send(order);
};

exports.deleteOrder = (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um die Bestellung mit der id aus params aus der orders-Collection zu löschen
 var order = orderModel.findByIdAndDelete(id)
  res.status(200).send(order);
};

exports.updateOrder =async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  // Schreib hier code um die Bestellung mit der id aus params in der orders-Collection mit den Daten aus req.body zu aktualisieren
  var order = await orderModel.findByIdAndUpdate(id, data, {new: true})
  res.status(200).send(order);
};

exports.addOrder = async (req, res, next) => {
  const data = req.body;
  // Schreib hier code um die Daten der neuen Bestellungen aus req.body in der orders-Collection zu speichern
  var order =  new orderModel(data)
   await  order.save()
  res.status(200).send(order);
};

