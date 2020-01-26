const express = require('express')
const server = express()

var Elm = require('./main').Elm;
var main = Elm.Main.init();

main.ports.output.subscribe(function(data) {
  console.log("   Output: " + JSON.stringify(data) + "\n");
});


// Test the server (no args)
server.get('/', (req, res) => {
  res.send('Hi, I am here.  What is your command?')
})

// Test the server (with args)
server.get('/echo/:str', (req, res) => {
  res.send('Echo: ' + req.params.str)
})


// Use Platform.worker
server.get('/compute/:n', (req, res) => compute(res, req.params.n))

server.get('/result/:n', (req, res) => res.params.n)

function compute(res, n_) {
   var n = parseInt(n_)
   console.log("   Input: ", n)
   main.ports.process.send(n);
   res.send('The result is in the terminal window')
}


server.listen(3000, () => console.log('\n   Server ready on port 3000\n   Try localhost:3000/compute/1\n'))