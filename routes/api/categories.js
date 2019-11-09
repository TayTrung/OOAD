const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

//Category Model
const Category = require("../../models/Category");

//@route GET /category/:id
//@desc  Get category by ID
//@access Private
router.get("/:id", auth, (req, res) => {
  Category.findById(req.params.id)
    .then(category => {
      res.json(category);
    })
    .catch(err => res.json(err));
});

//@route PUT /category/:id
//@desc  Update category by ID
//@access Private
router.put("/:id", auth, (req, res) => {
  console.log(req.body);

  const newCategory = {
    name: req.body.name,
    _id: req.body._id
  };
  Category.findByIdAndUpdate(req.body._id, newCategory, { new: true })
    .then(category => {
      res.json(category);
    })
    .catch(err => res.json(err));
});

//@route GET /category
//@desc  Get All categories
//@access Private
router.get("/:objects/:page/:query", auth, (req, res) => {
  const { objects, page, query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Category.find({ name: { $regex: newQuery, $options: "i" } })
    .limit(Number(objects))
    .skip(objects * (page - 1))
    .sort({ createAt: -1 })
    .then(category => res.json(category))
    .catch(err => res.json(err));
});

//@route GET /category
//@desc  Get All categories
//@access Private
router.get("/count/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Category.find({ name: { $regex: newQuery, $options: "i" } })
    .countDocuments()
    .sort({ createAt: -1 })
    .then(counter => res.json(counter))
    .catch(err => res.json(err));
});

//@route POST /category
//@desc  Create a category
//@access Private
router.post("/", auth, (req, res) => {
  const newCategory = new Category({
    name: req.body.name
  });

  newCategory
    .save()
    .then(category => res.json(category))
    .catch(err => res.json(err));
});

//@route DELETE /category/:id
//@desc  Delete a category
//@access Private
router.delete("/:id", auth, (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.json(err));
});

module.exports = router;
