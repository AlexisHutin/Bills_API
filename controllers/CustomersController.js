const User = require("../models/User");
const Customer = require("../models/Customer");

exports.add = (req, res, next) => {
  let customer = new Customer();

  customer.name = req.body.name;
  customer.email = req.body.email;
  customer.is_company = req.body.is_company;

  customer
    .save()
    .then(() => {
      res.status(201).json({
        message: "Customer added successfully!",
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

exports.edit = (req, res, next) => {};

exports.delete = (req, res, next) => {};

exports.view = (req, res, next) => {};
