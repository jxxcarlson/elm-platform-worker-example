// A repl for communicating with an Elm Platform.worker program
// See README for installaion directions
// Sample session:
//    $ node run/repl.js
//    > 33
//    100
//
// The worker applied a mystery function the input
// 33 to produce the output 100

// Main.elm has two ports:
//
//     port get : (InputType -> msg) -> Sub msg
//     port put : OutputType -> Cmd msg
//
// The first port (get) listens for data from
// the Javascript program (here!).  Then second port
// sends data from the Elm to the Javascript program.

const repl = require('repl');

// Link to Elm code
var Elm = require('./main').Elm;
var main = Elm.Main.init();

// Eval function for the repl
function eval(input, _, __, callback) {
  main.ports.put.subscribe(
    function putCallback (data) {
      main.ports.put.unsubscribe(putCallback)
      callback(null, data)
    }
  )
  main.ports.get.send(Number(input))
}

repl.start({ prompt: '> ', eval: eval });


