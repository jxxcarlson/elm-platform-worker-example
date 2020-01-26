port module Ports exposing
    ( process
    , output
    )


port process : (Int -> msg) -> Sub msg


port output : Int -> Cmd msg
