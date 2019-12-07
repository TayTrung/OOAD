const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')
require('dotenv').config()

//User Model
const User = require('../../models/User')

//@route POST api/auth
//@desc Authenticate user
//@access Public
router.post('/', (req, res) => {
  const { username, password } = req.body

  //Simple validation
  if (!username || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' })
  }

  //Check for existing user
  User.findOne({ username }).then(user => {
    if (!user) {
      return res.status(400).json({ msg: "User doesn't exist" })
    }

    //Validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' })

      jwt.sign(
        {
          id: user.id,
          role: user.idRole,
        },
        process.env.jwtSecret,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err

          res.json({
            token,
            user: {
              name: user.username,
              id: user.id,
              idRole: user.idRole,
              fullName: user.fullName,
            },
          })
        }
      )
    })
  })
})

//@route GET api/auth/user
//@desc Get user
//@access Private
router.get('/user', auth, (req, res) => {
  User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
    .catch(err => res.json(err))
})
module.exports = router
