const express = require("express");
const router = express.Router();


const Product = require("../../models/Product");


router.get("/:id", (req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      res.json(product);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.put("/:id", (req, res) => {
  console.log(req.body);

  const newProduct = {
    idCategory: req.body.idCategory,
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    status: req.body.status,
    _id: req.body._id
  };
  Product.findByIdAndUpdate(req.body._id, newProduct, { new: true })
    .then(product => {
      res.json(product);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.get("/:objects/:page/:query", (req, res) => {
  const { objects, page, query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Product.find({ name: { $regex: newQuery, $options: "i" } })
    .limit(Number(objects))
    .skip(objects * (page - 1))
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(product => res.json(product)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.get("/count/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Product.find({ name: { $regex: newQuery, $options: "i" } })
    .countDocuments()
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(counter => res.json(counter)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.post("/", (req, res) => {
  const newProduct = new Product({
    _id: req.body._id,
    idCategory: req.body.idCategory,
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    status: req.body.status
  });

  newProduct
    .save()
    .then(product => res.json(product)) //reutnr lại item đã save đc
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.delete("/:id", (req, res) => {
  //console.log(req.params.id);
  Product.findByIdAndDelete(req.params.id)
    .then(item => res.json(item)) //Return lại item đã xóa
    .catch(err => res.json(err)); //Catch lỗi rồi return ra
});

module.exports = router;
