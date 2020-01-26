module Run exposing (transform)


transform : Int -> Int
transform k =
    case modBy 2 k == 0 of
        True -> k // 2
        False -> 3*k+ 1

