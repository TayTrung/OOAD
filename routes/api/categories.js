const express = require("express");
const router = express.Router();

//Category Model
const Category = require("../../models/Category");

//@route GET /categories     (dùng phương thức GET và route là /categories)
//@desc  Get All categories  (miểu tả APi làm gì)
//@access Public             (access hiện tại là public vì Trung chưa tạo authentication)
router.get("/", (req, res) => {
  Category.find()
    .sort({ date: -1 }) //desc = -1 acs = 1
    .then(items => res.json(items)); //return lại item
});

//@route POST /categories   (dùng phương thức POST và route là /categories)
//@desc  Create a category  (miểu tả APi làm gì)
//@access Public            (access hiện tại là public vì Trung chưa tạo authentication)
router.post("/", (req, res) => {
  const newItem = new Category({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item)); //reutnr lại item đã save đc
});

//@route DELETE /categories/:id (dùng phương thức POST và route là /categories/:id)
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
  Category.findByIdAndDelete(req.params.id)
    .then(item => res.json(item)) //Return lại item đã xóa
    .catch(err => res.json(err)); //Catch lỗi rồi return ra
});

module.exports = router;
