const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const mongoose = require("mongoose");

//Category Model
const Category = require("../../models/Category");

//@route GET /category/:id
//@desc  Get category by ID
//@access Private
router.get("/:id", auth, (req, res) => {
  Category.findById(req.params.id)
    .then(category => {
      res.json(category);
      console.log(category);
    })
    .catch(err => res.json(err));
});

//@route PUT /category/:id
//@desc  Update category by ID
//@access Private
router.put("/:id", auth, (req, res) => {
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
    _id: req.body._id,
    createAt: req.body.createAt,
    name: req.body.name
  });
  console.log(req.body._id);

  newCategory
    .save()
    .then(category => res.json(category))
    .catch(err => res.json(err));
});

function insertDocument(doc, targetCollection) {
  while (1) {
    var cursor = targetCollection
      .find({}, { _id: 1 })
      .sort({ _id: -1 })
      .limit(1);

    var seq = cursor.hasNext() ? cursor.next()._id + 1 : 1;

    doc._id = seq;

    var results = targetCollection.insert(doc);

    if (results.hasWriteError()) {
      if (results.writeError.code == 11000 /* dup key */) continue;
      else print("unexpected error inserting data: " + tojson(results));
    }

    break;
  }
}

//@route DELETE /category/:id
//@desc  Delete a category
//@access Private
router.delete("/:id", auth, (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then(item => res.json(item))
    .catch(err => res.json(err));
});

module.exports = router;
