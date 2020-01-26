# Platform.worker

This is a little experiment to learn how to use Elm's 
`Platform.worker` and make a simple command-line interface
for it.  The worker is a kind of "black box" which accepts 
input from the CLI via ports, computes a value from the input, and sends it back to the CLI
by ports.  There is also a repl version.

I would like to thank @pd-andy on the Elm Slack for his help
with this project.


## Simple one-shot CLI


**Installation and use:**

 1)  `$ sh make.sh `                     
 
 2)  `$ chmod u+x cli; alias cli='./cli'` 
 
 3)  `$ cli 77`                          
     `232`


**Comments**

You must have already installed `Node.js`.

1) Compile Main.elm to `./run/main.js` and
copy `src/cli.js` to `./run/cli.js` using 
`sh make.sh`

2) Make `cli` executable and make an alias for it
to avoid awkward typing.

3) Try it out.  In this example, if the input is
even, divide it by 2.  If it is odd, multiply it
by 3 and add 1.

To do something more interesting with the black box, replace
the function 

```elm
transform : InputType -> OutputType
```

in `Main.elm`

## REPL Version

The source file is `src/repl.js`.

1) Run `sh make.sh`.  

2) Run `node run/repl.js`

Sample session:

```elm
$ node run/repl.js
> 17
52
> 52
26
> 26
13
> 13
40
> 40
20
```

What happens if you keep on with this?