const express = require("express");
const router = express.Router();

//Member Model
const Member = require("../../models/Member");

//search theo query, them duong dan /api/member/search/ trong file server
router.get("/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Member.find({ name: { $regex: newQuery, $options: "i" } })
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(member => res.json(member)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

router.get("/:id", (req, res) => {
  Member.findById(req.params.id)
    .then(member => {
      res.json(member);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

router.get('', (req, res) => {
  Member.find()
    .then(member => {
      res.json(member);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

router.put("/:id", (req, res) => {
  console.log(req.body);

  const newMember = {
    name: req.body.name,
    phone: req.body.phone,
    point: req.body.point,
    _id: req.body._id
  };
  Member.findByIdAndUpdate(req.body._id, newMember, { new: true })
    .then(member => {
      res.json(member);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.get("/:objects/:page/:query", (req, res) => {
  const { objects, page, query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Member.find({ name: { $regex: newQuery, $options: "i" } })
    .limit(Number(objects))
    .skip(objects * (page - 1))
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(member => res.json(member)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.get("/count/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Member.find({ name: { $regex: newQuery, $options: "i" } })
    .countDocuments()
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(counter => res.json(counter)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//@route POST /member   (dùng phương thức POST và route là /member)
//@desc  Create a member  (miểu tả APi làm gì)
//@access Public            (access hiện tại là public vì Trung chưa tạo authentication)
router.post("/", (req, res) => {
  const newMember = new Member({
    name: req.body.name,
    phone: req.body.phone,
    point: req.body.point
  });

  newMember
    .save()
    .then(member => res.json(member)) //reutnr lại item đã save đc
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//@route DELETE /member/:id (dùng phương thức POST và route là /member/:id)
//@desc  Delete a member      (miêu tả API làm gì)
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

  Member.findByIdAndDelete(req.params.id)
    .then(item => res.json(item)) //Return lại item đã xóa
    .catch(err => res.json(err)); //Catch lỗi rồi return ra
});

module.exports = router;
