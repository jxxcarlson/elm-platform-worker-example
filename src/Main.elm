port module Main exposing (main)

import Platform exposing (Program)
import Http

port process : (Int -> msg) -> Sub msg

port output : Int -> Cmd msg

replyUrl = "localhost:3000/result/"

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
    | GotResult(Result Http.Error String)


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
            in
            ( model, output kOut)

        GotResult response ->
            case response of
                Ok _ -> (model, Cmd.none)
                Err _ -> (model, Cmd.none)

subscriptions : Model -> Sub Msg
subscriptions _ =
    process GotInput

-- THE COMPUTATION

transform : Int -> Int
transform k =
    case modBy 2 k == 0 of
        True -> k // 2
        False -> 3*k+ 1

