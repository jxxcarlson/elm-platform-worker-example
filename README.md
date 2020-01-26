This is a little experiment to learn how to use Elm's 
`Platform.worker` and make a simple command-line interface
for it.

**Installation and use:**

 1)  `$ sh make.sh `                     
 
 2)  `$ chmod u+x cli; alias cli='./cli'` 
 
 3)  `$ cli 77`                          
     `232`


**Comments**

1) Compile Main.elm to `./run/main.js` and
copy `src/cli.js` to `./run/cli.js`

2) Make `cli` executable and make an alias for it
to avoid awkward typing.

3) Try it out.  The program `cli.js` communicates
with the runtime for the `Platform.worker` program
using ports.  The worker accepts input, 
computes some output,
and send the output back through ports.

To do something more interesting, replace
the function 

```elm
transform : InputType -> OutputType
```

in `Main.elm`