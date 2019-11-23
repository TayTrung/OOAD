const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//User Model
const User = require("../../models/User");

//@route POST api/users
//@desc Register new user
//@access Public
router.post("/", (req, res) => {
  const {
    idRole,
    username,
    password,
    fullName,
    phoneNumber,
    address
  } = req.body;

  //Simple validation
  if (
    !username ||
    !idRole ||
    !fullName ||
    !phoneNumber ||
    !address ||
    !password
  ) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //Check for existing user
  User.findOne({ username }).then(user => {
    if (user) {
      console.log(user);
      return res.status(400).json({ msg: "User already exist" });
    }
    const newUser = new User({
      username,
      idRole,
      fullName,
      phoneNumber,
      address,
      password
    });

    //Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => {
            jwt.sign(
              {
                id: user.id
              },
              config.get("jwtSecret"),
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;

                res.json({
                  token,
                  user: {
                    id: user.id,
                    idRole: user.idRole,
                    username: user.username,
                    password: user.password,
                    fullName: user.fullName,
                    phoneNumber: user.phoneNumber,
                    address: user.address
                  }
                });
              }
            );
          })

          .catch(err => res.json(err));
      });
    });
  });
});

//Get User by ID
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.json(err));
});

//Update User
router.put("/:id", (req, res) => {
  console.log(req.body);

  const newUser = ({
    idRole,
    username,
    password,
    fullName,
    phoneNumber,
    address
  } = req.body);

  bcrypt.hash(newUser.password, 10, (err, hash) => {
    if (err) return res.json(err);
    newUser.password = hash;
    User.findByIdAndUpdate(req.body._id, newUser, { new: true })
      .then(user => {
        res.json(user);
      })
      .catch(err => res.json(err));
  });
});

//Get all User
router.get("/:objects/:page/:query", (req, res) => {
  const { objects, page, query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  User.find({ username: { $regex: newQuery, $options: "i" } })
    .limit(Number(objects))
    .skip(objects * (page - 1))
    //.sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(user => res.json(user)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//Get all Material
router.get("/count/:query", (req, res) => {
  const { query } = req.params;
  let newQuery = "";
  if (query === "undefined") newQuery = "";
  else newQuery = query;

  User.find({ username: { $regex: newQuery, $options: "i" } })
    .countDocuments()
    .sort({ createAt: -1 }) //desc = -1 acs = 1
    .then(counter => res.json(counter)) //return lại item
    .catch(err => res.json(err)); //Catch lỗi rồi return ra;
});

//Delete a User
router.delete("/:id", (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(item => res.json(item)) //Return lại item đã xóa
    .catch(err => res.json(err)); //Catch lỗi rồi return ra
});

function hashPass(password) {}

//@route POST api/auth
//@desc Check current password of user
//@access Public
router.post("/cp/:id", (req, res) => {
  const username = req.body.username;
  console.log("TCL: username", username);
  const password = req.body.curPassword;
  console.log("TCL: password", password);

  if (!username || !password) {
    return res.send({
      error: "User name and password required"
    });
  }

  User.findById(req.body._id).then(user => {
    if (!user) {
      return res.send({
        error: "Invalid user"
      });
    }
    console.log(user.password);

    bcrypt.compare(password, user.password, function(err, response) {
      console.log("TCL: response", response);
      if (err) return res.json(err);
      else if (response == false) {
        return res.json({ status: 400, msg: "Wrong" });
      } else {
        return res.json({ status: 200, msg: "Correct" });
      }
    });
  });
});

// //updatePassword route is an authenticated route. It checks for the token, and if it’s valid, it will continue to save the user’s password by searching for the User with the user ID from the decoded token.

// router.put('/updatePassword', authCheck, async (req, res) => {
//   const token = req.headers.authorization;
//   const password = req.body.password;
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   const userId = decoded.data.userId;
//   try {
//       const hashedPassword = await bcrypt.hash(password, 10)
//       await models.User.update({
//           hashedPassword
//       }, {
//               where: {
//                   id: userId
//               }
//           })
//       return res.send({ message: 'User created' });
//   }
//   catch (ex) {
//       logger.error(ex);
//       res.status(400);
//       return res.send({ error: ex });
//   }});

// //The passwordResetRequest route generates the password reset token when the route is called and save it in to the passwordResetToken column of our Users table
// router.post('/passwordResetRequest', async (req, res) => {
//   const email = req.body.email;
//   const buffer = await crypto.randomBytes(32);
//   const passwordResetToken = buffer.toString("hex");
//   try {
//       await models.User.update(
//           {
//               passwordResetToken
//           }, {
//               where: {
//                   email
//               }
//           }
//       )
//       const passwordResetUrl = `${process.env.FRONTEND_URL}/passwordReset?passwordResetToken=${passwordResetToken}`;
//       sgMail.setApiKey(process.env.SENDGRID_API_KEY);
//       const msg = {
//           to: email,
//           from: process.env.FROM_EMAIL,
//           subject: 'Password Reset Request',
//           text: `
//           Dear user,
// You can reset your password by going to ${passwordResetUrl}
//       `,
//           html: `
//           <p>Dear user,</p>
// <p>
//               You can reset your password by going to
//               <a href="${passwordResetUrl}">this link</a>
//           </p>
//       `,
//       };
//       sgMail.send(msg);
//       res.send({ message: 'Successfully sent email' });
//   }
//   catch (ex) {
//       logger.error(ex);
//       res.send(ex, 500);
//   }
// });

// //when the passwordReset is called, the user’s password gets reset after checking against their password reset token
// router.post('/passwordReset', async (req, res) => {
//   const password = req.body.password;
//   const passwordResetToken = req.body.passwordResetToken;
//   const hashedPassword = await bcrypt.hash(password, 10);
//   const buffer = await crypto.randomBytes(32);
//   const newPasswordResetToken = buffer.toString("hex");
//   try {
//       await models.User.update(
//           {
//               hashedPassword,
//               passwordResetToken: newPasswordResetToken
//           }, {
//               where: {
//                   passwordResetToken
//               }
//           }
//       )
//       res.send({ message: 'Successfully reset password' });
//   }
//   catch (ex) {
//       logger.error(ex);
//       res.send(ex, 500);
//   }
// });

module.exports = router;
