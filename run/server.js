const express = require('express')
const app = express()

var Elm = require('./main').Elm;
var main = Elm.Main.init();


// Test the server (no args)
app.get('/', (req, res) => {
  res.send('Hi, I am here.  What is your command?')
})

// Test the server (with args)
app.get('/echo/:str', (req, res) => {
  res.send('Echo: ' + req.params.str)
})


// Use Platform.worker
app.get('/compute/:n', (req, res) => compute(req.params.n))

function compute(n_) {
   var n = parseInt(n_)
   main.ports.process.send(n);
}


app.listen(3000, () => console.log('\n   Server ready on port 3000\n   Try localhost:3000/compute/1\n'))