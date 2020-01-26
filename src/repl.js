// A repl for communicating with an Elm Platform.worker program
// See README for installaion directions
// Sample session:
//    $ node run/repl.js
//    > 33
//    100
//
// The worker applied a mystery function the input
// 33 to produce the output 100

const repl = require('repl');

// Link to Elm code
var Elm = require('./main').Elm;
var main = Elm.Main.init();

// Eval function for the repl
function eval(cmd, _, __, callback) {
  main.ports.put.subscribe(
    function putCallback (data) {
      main.ports.put.unsubscribe(putCallback)
      callback(null, data)
    }
  )
  main.ports.get.send(Number(cmd))
}

repl.start({ prompt: '> ', eval: eval });


