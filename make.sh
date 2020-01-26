date +"%H:%M:%S"

case $1 in

    -d) elm make --debug src/Main.elm --output=run/main.js

    ;;

    *) elm make --optimize src/Main.elm --output=run/main.js

    ;;

esac


cp src/cli.js run/
cp src/repl.js run/
