# Platform.worker

This is a little experiment to learn how to use Elm's 
`Platform.worker` and make simple command-line interfaces
for it.  The worker is a kind of "black box" which accepts 
input from a CLI via ports, computes a value from the input, and sends it back to the CLI
by ports.  There are two versions of the CLI, described below: a 
one-shot version, and a repl.

I would like to thank @pd-andy, @urban-a and @jfmengels on the 
Elm Slack for their help. I was also inspired
by [Punie's article](https://discourse.elm-lang.org/t/simply-typed-lambda-calculus-in-elm/1772) on his simply-typed lambda calculus 
interpreter and the [code for it](https://github.com/Punie/elm-stlc).
 
 
## Installation and Use

```bash
$ npm install
$ npm build
```

## One shot CLI

```barsh
 $ npm run cli 47

> platform@1.0.0 cli /Users/carlson/dev/elm/experiments/platform
> node src/cli.js "47"


   Input:  47
   Output: 142
```

**Note.** The Elm app `Main.elm` defines the function 

```elm
transform : InputType -> OutputType
transform k =
    case modBy 2 k == 0 of
        True -> k // 2
        False -> 3*k+ 1
```

In words, 

> If the input is
  even, divide it by 2.  If it is odd, multiply it
  by 3 and add 1. 

To do something more interesting with the black box, replace
the function `transform`




## Repl

```bash
 $ npm run repl

> platform@1.0.0 repl /Users/carlson/dev/elm/experiments/platform
> node src/repl.js

> 47
142
> 142
71
> 71
214
>
```
What happens if you continue with the above?

**Comments**

1) You must have already installed `Node.js`.

2) The file `./cli` is a shell script for running the 
command-line interface.  Make it executable 
and make an alias for it to avoid awkward typing.


**Note to self:** This code is found 
at `~/dev/elm/experiments/platform`