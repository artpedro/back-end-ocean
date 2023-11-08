// creating app
const express = require('express')
const app = express()
const port = 3000

// creating principal end-point using app
// using method get
// in the end-point /
// with a response contain the string 'Hello World!'
app.get('/', function (req, res) {
  res.send('Hello World!')
})

// another end-point on /oi
app.get('/oi', function (req, res) {
    res.send('Olá Mundo')
})

// listen to port 3000 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})