const express = require("express");
const router = express.Router();


const Invoice = require("../../models/Invoice");


router.get("/:id", (req, res) => {
  Invoice.findById(req.params.id)
    .then(invoice => {
      res.json(invoice);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.put("/:id", (req, res) => {
  console.log(req.body);

  const newInvoice = {
    idMember: req.body.idMember,
    idUser: req.body.idUser,
    totalAmt: req.body.totalAmt,
    createddate: req.body.createddate,
    comments: req.body.comments,
    _id: req.body._id
  };
  Invoice.findByIdAndUpdate(req.body._id, newInvoice, { new: true })
    .then(invoice => {
      res.json(invoice);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.get("/:objects/:page/:query", (req, res) => {
  const { objects, page, query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Invoice.find({ idMember: { $regex: newQuery, $options: "i" } })
    .limit(Number(objects))
    .skip(objects * (page - 1))
    //.sort({ createddate: -1 }) //desc = -1 acs = 1
    .then(invoice => res.json(invoice)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.get("/count/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Invoice.find({ name: { $regex: newQuery, $options: "i" } })
    .countDocuments()
    .sort({ createddate: -1 }) //desc = -1 acs = 1
    .then(counter => res.json(counter)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.post("/", (req, res) => {
  const newInvoice = new Invoice({
    idMember: req.body.idMember,
    idUser: req.body.idUser,
    totalAmt: req.body.totalAmt,
    createddate: req.body.createddate,
    comments: req.body.comments,
  });

  newInvoice
    .save()
    .then(invoice => res.json(invoice)) //reutnr lại item đã save đc
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.delete("/:id", (req, res) => {
  //console.log(req.params.id);
  Invoice.findByIdAndDelete(req.params.id)
    .then(item => res.json(item)) //Return lại item đã xóa
    .catch(err => res.json(err)); //Catch lỗi rồi return ra
});

module.exports = router;
