const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World mckv1, I am student of mckvie')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
