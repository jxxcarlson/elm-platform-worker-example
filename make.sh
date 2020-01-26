date +"%H:%M:%S"

case $1 in

    -d) elm make --debug src/Main.elm --output=dist/main.js

    ;;

    *) elm make --optimize src/Main.elm --output=dist/main.js

    ;;

esac

tsc ts/runner.ts --outDir ./dist
