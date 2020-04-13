# Platform.worker

This is a little experiment to learn how to use Elm's
`Platform.worker` for simple command-line programs (CLI).  
The worker is a kind of "black box" which accepts
input from a command-line program
via ports, computes a value from the input, and sends it back
by the same method.  There are two versions, described below: a
one-shot version, and a repl.

I would like to thank @pd-andy, @urban-a and @jfmengels on the
Elm Slack for their help. I was also inspired
by [Punie's article](https://discourse.elm-lang.org/t/simply-typed-lambda-calculus-in-elm/1772) on his simply-typed lambda calculus
interpreter and the [code for it](https://github.com/Punie/elm-stlc).


## Installation

```bash
$ sh make.sh
```

## Using the one-shot CLI

```bash
 $ node src/cli.js 47

> platform@1.0.0 cli /Users/carlson/dev/elm/experiments/platform
> node src/cli.js "47"

   Input:  47
   Output: 142
```

**Note.** Input is transformed to output in
the Elm app `Main.elm` using the function

```elm
transform : InputType -> OutputType
transform k =
    case modBy 2 k == 0 of
        True -> k // 2
        False -> 3*k+ 1
```
where `InputType` and `OutputType` are aliases for `Int`.
In words,

> If the input is
  even, divide it by 2.  If it is odd, multiply it
  by 3 and add 1.

To do something more interesting, replace
the function `transform` (and if need be, the types).




## Using repl

```bash
 $ node src/repl.js

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

**Note:** There is a related command-line interpreter
in this [repo](https://github.com/jxxcarlson/elm-platform-worker-example). T
The command `load foo.txt` loads the contents of `./foo.txt` into memory.
The command `show` displays the contents of the file in memory.

**Note to self:** This code is found at `~/dev/elm/experiments/platform`
