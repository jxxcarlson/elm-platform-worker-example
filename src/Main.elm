port module Main exposing (main)

import Platform exposing (Program)

port process : (Int -> msg) -> Sub msg

port output : Int -> Cmd msg


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


-- THE COMPUTATION

transform : Int -> Int
transform k =
    case modBy 2 k == 0 of
        True -> k // 2
        False -> 3*k+ 1

