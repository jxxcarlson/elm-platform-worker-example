date +"%H:%M:%S"

case $1 in

    -d) elm make --debug src/Main.elm --output=src/main.js

    ;;

    *) elm make --optimize src/Main.elm --output=src/main.js

    ;;

esac

