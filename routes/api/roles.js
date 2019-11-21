const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//Category Model
const Role = require("../../models/Role");

//@route GET /role/:id
//@desc  Get role by ID
//@access Private
router.get("/:id", auth, (req, res) => {
  Role.findById(req.params.id)
    .then(role => {
      res.json(role);
    })
    .catch(err => res.json(err));
});

//@route PUT /role/:id
//@desc  Update role by ID
//@access Private
router.put("/:id", auth, (req, res) => {
  console.log(req.body);
  const {
    name,
    memberManagement,
    productManagement,
    categoryManagement,
    customerManagement,
    invoiceManagement,
    supplierManagement,
    billManagement,
    materialManagement,
    roleManagement,
    materialReceiptNoteManagement
  } = req.body;
  const newRole = {
    name,
    memberManagement,
    productManagement,
    categoryManagement,
    customerManagement,
    invoiceManagement,
    supplierManagement,
    billManagement,
    materialManagement,
    materialReceiptNoteManagement,
    roleManagement
  };
  Role.findByIdAndUpdate(req.body._id, newRole, { new: true })
    .then(role => {
      res.json(role);
    })
    .catch(err => res.json(err));
});

//@route GET /role
//@desc  Get All roles
//@access Private
router.get("/:objects/:page/:query", auth, (req, res) => {
  const { objects, page, query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Role.find({ name: { $regex: newQuery, $options: "i" } })
    .limit(Number(objects))
    .skip(objects * (page - 1))
    .sort({ createAt: -1 })
    .then(role => res.json(role))
    .catch(err => res.json(err));
});

//@route GET /role
//@desc  Get All roles
//@access Private
router.get("/count/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Role.find({ name: { $regex: newQuery, $options: "i" } })
    .countDocuments()
    .sort({ createAt: -1 })
    .then(counter => res.json(counter))
    .catch(err => res.json(err));
});

//@route POST /role
//@desc  Create a role
//@access Private
router.post("/", (req, res) => {
  const {
    _id,
    name,
    memberManagement,
    productManagement,
    categoryManagement,
    customerManagement,
    invoiceManagement,
    supplierManagement,
    billManagement,
    materialManagement,
    roleManagement,
    materialReceiptNoteManagement
  } = req.body;

  const newRole = new Role({
    _id,
    name,
    memberManagement,
    productManagement,
    categoryManagement,
    customerManagement,
    invoiceManagement,
    supplierManagement,
    billManagement,
    materialManagement,
    roleManagement,
    materialReceiptNoteManagement
  });

  newRole
    .save()
    .then(role => res.json(role))
    .catch(err => res.json(err));
});

//@route DELETE /category/:id
//@desc  Delete a category
//@access Private
router.delete("/:id", (req, res) => {
  Role.findByIdAndDelete(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.json(err));
});

module.exports = router;
