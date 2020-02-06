
// Link to Elm code
var Elm = require('../compiled/main').Elm;
var main = Elm.Main.init();

// Get data from the command line
var args = process.argv.slice(2);
var kIn = parseInt(args[0])
console.log("\n   Input: ", kIn)

// Send data to the worker
main.ports.get.send(kIn);

// Get data from the worker
main.ports.put.subscribe(function(data) {
  console.log("   Output: " + JSON.stringify(data) + "\n");
});
