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
app.get('/compute/:n', (req, res) => compute(res, req.params.n))

app.get('/result/:n', (req, res) => res.params.n)

function compute(res, n_) {
   var n = parseInt(n_)
   main.ports.process.send(n);
   res.send('The result is in the terminal window')
}


app.listen(3000, () => console.log('\n   Server ready on port 3000\n   Try localhost:3000/compute/1\n'))