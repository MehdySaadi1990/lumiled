const express = require('express')
const app = express()
const productRoutes = require('./routes/products')
const userRoutes = require('./routes/users')
const mysql = require('mysql2')

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});



const db = mysql.createPool({
  host: '127.0.0.1',
  user:'root',
  password:'Mehdy$@@di1990',
  database:'lumiled'
}).promise()
 
app.set('db', db);
app.use(express.json())
app.use('/api/product', productRoutes)
app.use('/api/users', userRoutes)


module.exports = app