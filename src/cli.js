
// Link to compiled Elm code main.js
var Elm = require('./main').Elm;
var main = Elm.Main.init();

// Get data from the command line
var args = process.argv.slice(2);
var input = parseInt(args[0])
console.log("\n   Input: ", input)

// Send data to the worker
main.ports.get.send(input);

// Get data from the worker
main.ports.put.subscribe(function(data) {
  console.log("   Output: " + JSON.stringify(data) + "\n");
});
