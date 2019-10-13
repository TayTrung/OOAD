const express = require("express");
const router = express.Router();

//Category Model
const Category = require("../../models/Category");

//@route GET /category/:id     (dùng phương thức GET và route là /category/:id)
//@desc  Get category by ID  (miểu tả APi làm gì)
//@access Public             (access hiện tại là public vì Trung chưa tạo authentication)
router.get("/:id", (req, res) => {
  Category.findById(req.params.id)
    .then(category => {
      res.json(category);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//@route PUT /category/:id     (dùng phương thức PUT và route là /category/:id)
//@desc  Update category by ID  (miểu tả APi làm gì)
//@access Public             (access hiện tại là public vì Trung chưa tạo authentication)
router.put("/:id", (req, res) => {
  console.log(req.body);

  const newCategory = {
    name: req.body.name,
    _id: req.body._id
  };
  Category.findByIdAndUpdate(req.body._id, newCategory, { new: true })
    .then(category => {
      res.json(category);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//@route GET /category     (dùng phương thức GET và route là /category)
//@desc  Get All categories  (miểu tả APi làm gì)
//@access Public             (access hiện tại là public vì Trung chưa tạo authentication)
router.get("/:objects/:page/:query", (req, res) => {
  const { objects, page, query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Category.find({ name: { $regex: newQuery, $options: "i" } })
    .limit(Number(objects))
    .skip(objects * (page - 1))
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(category => res.json(category)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//@route GET /category     (dùng phương thức GET và route là /category)
//@desc  Get All categories  (miểu tả APi làm gì)
//@access Public             (access hiện tại là public vì Trung chưa tạo authentication)
router.get("/count/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Category.find({ name: { $regex: newQuery, $options: "i" } })
    .countDocuments()
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(counter => res.json(counter)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//@route POST /category   (dùng phương thức POST và route là /category)
//@desc  Create a category  (miểu tả APi làm gì)
//@access Public            (access hiện tại là public vì Trung chưa tạo authentication)
router.post("/", (req, res) => {
  const newCategory = new Category({
    name: req.body.name
  });

  newCategory
    .save()
    .then(category => res.json(category)) //reutnr lại item đã save đc
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//@route DELETE /category/:id (dùng phương thức POST và route là /category/:id)
//@desc  Delete a category      (miêu tả API làm gì)
//@access Public                (access hiện tại là public vì Trung chưa tạo authentication)
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

  Category.findByIdAndDelete(req.params.id)
    .then(item => res.json(item)) //Return lại item đã xóa
    .catch(err => res.json(err)); //Catch lỗi rồi return ra
});

module.exports = router;
