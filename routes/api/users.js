const express = require("express");
const router = express.Router();

//User Model
const User = require("../../models/User");

//search theo query, them duong dan /api/user/search/ trong file server
router.get("/search/:query", (req, res) => {
  const { query } = req.params;
  //let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  Member.find({ name: { $regex: newQuery, $options: "i" } })
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(user => res.json(user)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user);
    }) 
    .catch(err => res.json(err)); 
});

router.get('', (req, res) => {
  User.find()
  .then(user => {
    res.json(user);
  }) // resturn lại item
  .catch(err => res.json(err)); // catch lỗi rồi return ra
});
             
router.put("/:id", (req, res) => {
  console.log(req.body);

  const newUser = {
    name: req.body.name,
    _id: req.body._id,
    idRole: req.body.idRole,
    username: req.body.username,
    password: req.body.password,
    phone: req.body.phone,
    address: req.body.address,
  };
  User.findByIdAndUpdate(req.body._id, newUser, { new: true })
    .then(user => {
      res.json(user);
    }) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//@route GET /user     (dùng phương thức GET và route là /user)
//@desc  Get All categories  (miểu tả APi làm gì)
//@access Public             
router.get("/:objects/:page/:query", (req, res) => {
  const { objects, page, query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  User.find({ name: { $regex: newQuery, $options: "i" } })
    .limit(Number(objects))
    .skip(objects * (page - 1))
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(user => res.json(user)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

           
router.get("/count/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  User.find({ name: { $regex: newQuery, $options: "i" } })
    .countDocuments()
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(counter => res.json(counter)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

// idRole
// username
// password
// name
// phone
// address
           
router.post("/", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    idRole: req.body.idRole,
    username: req.body.username,
    password: req.body.password,
    phone: req.body.phone,
    address: req.body.address,
  });

  newUser
    .save()
    .then(user => res.json(user)) //reutnr lại item đã save đc
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});


router.delete("/:id", (req, res) => {

  console.log(req.params.id);

  User.findByIdAndDelete(req.params.id)
    .then(item => res.json(item)) //Return lại item đã xóa
    .catch(err => res.json(err)); //Catch lỗi rồi return ra
});

module.exports = router;