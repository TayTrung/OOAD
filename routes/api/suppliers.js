const express = require("express");
const router = express.Router();

//Supplier Model
const Supplier = require("../../models/Supplier");

//search theo query, them duong dan /api/supplier/search/ trong file server
router.get("/search/:query", (req, res) => {
  const { query } = req.params;
  //let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Member.find({ name: { $regex: newQuery, $options: "i" } })
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(supplier => res.json(supplier)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

router.get("/:id", (req, res) => {
  Supplier.findById(req.params.id)
    .then(supplier => {
      res.json(supplier);
    }) 
    .catch(err => res.json(err)); 
});

router.get('', (req, res) => {
  Supplier.find()
  .then(supplier => {
    res.json(supplier);
  }) // resturn lại item
  .catch(err => res.json(err)); // catch lỗi rồi return ra
});
             
router.put("/:id", (req, res) => {
  console.log(req.body);

  const newSupplier = {
    name: req.body.name,
    _id: req.body._id,
    phone: req.body.phone,
    address: req.body.address,
  };
  Supplier.findByIdAndUpdate(req.body._id, newSupplier, { new: true })
    .then(supplier => {
      res.json(supplier);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//@route GET /supplier     (dùng phương thức GET và route là /supplier)
//@desc  Get All categories  (miểu tả APi làm gì)
//@access Public             
router.get("/:objects/:page/:query", (req, res) => {
  const { objects, page, query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Supplier.find({ name: { $regex: newQuery, $options: "i" } })
    .limit(Number(objects))
    .skip(objects * (page - 1))
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(supplier => res.json(supplier)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

           
router.get("/count/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Supplier.find({ name: { $regex: newQuery, $options: "i" } })
    .countDocuments()
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(counter => res.json(counter)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

           
router.post("/", (req, res) => {
  const newSupplier = new Supplier({
    name: req.body.name,
    phone: req.body.phone,
    address: req.body.address
  });

  newSupplier
    .save()
    .then(supplier => res.json(supplier)) //reutnr lại item đã save đc
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.delete("/:id", (req, res) => {

  console.log(req.params.id);

  Supplier.findByIdAndDelete(req.params.id)
    .then(item => res.json(item)) //Return lại item đã xóa
    .catch(err => res.json(err)); //Catch lỗi rồi return ra
});

module.exports = router;