module Main exposing (main)

import Platform exposing (Program)
import Ports exposing (process, output)
import Run exposing (transform)


main : Program Flags Model Msg
main =
    Platform.worker
        { init = init
        , update = update
        , subscriptions = subscriptions
        }


type alias Model =
    ()


type Msg
    = GotInput Int


type alias Flags =
    ()


init : Flags -> ( Model, Cmd Msg )
init _ =
    ( (), Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotInput kIn ->
            let
                kOut  = transform kIn
                _ = Debug.log "(in, out)" (kIn, kOut)
            in
            ( model, output kOut )


subscriptions : Model -> Sub Msg
subscriptions _ =
    process GotInput
