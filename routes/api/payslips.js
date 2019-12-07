const express = require("express");
const router = express.Router();

//PaySlip Model
const PaySlip = require("../../models/PaySlip");

router.get("/:id", (req, res) => {
  PaySlip.findById(req.params.id)
    .then(payslip => {
      res.json(payslip);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

router.get('', (req, res) => {
  PaySlip.find()
    .then(payslip => {
      res.json(payslip);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

router.put("/:id", (req, res) => {

  const newPaySlip = {
    idMember: req.body.idMember,
    idSupplier: req.body.idSupplier,
    createddate: req.body.createddate,
    totalAmt: req.body.totalAmt,
    _id: req.body._id
  };
  PaySlip.findByIdAndUpdate(req.body._id, newPaySlip, { new: true })
    .then(payslip => {
      res.json(payslip);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.get("/:objects/:page/:query", (req, res) => {
  const { objects, page, query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  PaySlip.find({ idMember: { $regex: newQuery, $options: "i" } })
    .limit(Number(objects))
    .skip(objects * (page - 1))
    .sort({ createddate: -1 }) //desc = -1 acs = 1
    .then(payslip => res.json(payslip)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.get("/count/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  PaySlip.find({ idMember: { $regex: newQuery, $options: "i" } })
    .countDocuments()
    .sort({ createddate: -1 }) //desc = -1 acs = 1
    .then(counter => res.json(counter)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

router.post("/", (req, res) => {
  const newPaySlip = new PaySlip({
    _id: req.body._id,
    idMember: req.body.idMember,
    idSupplier: req.body.idSupplier,
    createddate: req.body.createddate,
    totalAmt: req.body.totalAmt,
  });

  newPaySlip
    .save()
    .then(payslip => res.json(payslip)) //reutnr lại item đã save đc
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.delete("/:id", (req, res) => {
  // Có 2 cách:
  //          + Tìm ra bằng "findById" rồi "remove"
  //          + Tìm và xóa bằng "findByIdAndDelete"
  // Cách 2 là best practice

  // ----------------Cách 1------------------
  //   Item.findById(req.params.id)
  //     .then(item => item.remove().then(() => res.json({ success: true })))
  //     .catch(err => res.status(404).json({ success: false }));
  // ----------------Cách 2------------------
  console.log(req.params.id);

  PaySlip.findByIdAndDelete(req.params.id)
    .then(payslip => res.json(payslip)) //Return lại item đã xóa
    .catch(err => res.json(err)); //Catch lỗi rồi return ra
});

module.exports = router;
