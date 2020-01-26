
var Elm = require('./main').Elm;
var main = Elm.Main.init();


var kIn =33

console.log("\n   Input: ", kIn)

main.ports.process.send(33);

main.ports.output.subscribe(function(data) {
  console.log("   Output: " + JSON.stringify(data) + "\n");
});
