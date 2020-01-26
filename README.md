This is a little experiment to learn how to use Elm's 
`Platform.worker` and make a simple command-line interface
for it.  The worker is a kind of "black box" which accepts 
input from the CLI via ports,
computes a value from the input, and sends it back to the CLI
by ports.  



**Installation and use:**

 1)  `$ sh make.sh `                     
 
 2)  `$ chmod u+x cli; alias cli='./cli'` 
 
 3)  `$ cli 77`                          
     `232`


**Comments**

You must have already installed `Node.js`.

1) Compile Main.elm to `./run/main.js` and
copy `src/cli.js` to `./run/cli.js`

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