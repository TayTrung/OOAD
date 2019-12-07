const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const bodyParser = require('body-parser')

const categories = require('./routes/api/categories')
const suppliers = require('./routes/api/suppliers')
const users = require('./routes/api/users')

const app = express()

//Bodyparese Middleware
app.use(express.json())
app.use(bodyParser.json())

//Connect to Mongo
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log('Mongo DB Connected'))
  .catch(err => console.log(err))

app.use('/api/category', require('./routes/api/categories'))
app.use('/api/user', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/authentication'))
app.use('/api/role', require('./routes/api/roles'))

app.use('/api/member', require('./routes/api/members'))
app.use('/api/product', require('./routes/api/products'))
app.use('/api/invoice', require('./routes/api/invoices'))
app.use('/api/payslip', require('./routes/api/payslips'))

//Use routes (Mỗi lần tạo 1 route mới thì phải use nó ở đây thì mới chạy đc)
app.use('/api/category', categories)
app.use('/api/supplier', suppliers)
app.use('/api/user', users)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server started on port ${port}`))
