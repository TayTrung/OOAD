const express = require("express");
const router = express.Router();

//Material Model
const Material = require("../../models/Material");

//Get Material by ID
router.get("/:id", (req, res) => {
  Material.findById(req.params.id)
    .then(material => {
      res.json(material);
    })
    .catch(err => res.json(err));
});

//Update Material
router.put("/:id", (req, res) => {
  console.log(req.body);

  const newMaterial = {
    name: req.body.name,
    quantity: req.body.quantity,
    _id: req.body._id
  };
  Material.findByIdAndUpdate(req.body._id, newMaterial, { new: true })
    .then(material => {
      res.json(material);
    })
    .catch(err => res.json(err));
});

//Get all Material
router.get("/:objects/:page/:query", (req, res) => {
  const { objects, page, query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Material.find({ name: { $regex: newQuery, $options: "i" } })
    .limit(Number(objects))
    .skip(objects * (page - 1))
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(material => res.json(material)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//Get all Material
router.get("/count/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Material.find({ name: { $regex: newQuery, $options: "i" } })
    .countDocuments()
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(counter => res.json(counter)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//Create a new Material
router.post("/", (req, res) => {
  const newMaterial = new Material({
    name: req.body.name,
    quantity: req.body.quantity
  });

  newMaterial
    .save()
    .then(material => res.json(material)) //reutnr lại item đã save đc
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//Delete a Material
router.delete("/:id", (req, res) => {
  Material.findByIdAndDelete(req.params.id)
    .then(item => res.json(item)) //Return lại item đã xóa
    .catch(err => res.json(err)); //Catch lỗi rồi return ra
});

module.exports = router;
