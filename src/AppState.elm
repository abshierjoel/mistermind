port module AppState exposing (..)

import Browser
import Html exposing (Html, div)
import Html.Attributes exposing(class, classList)
import List



---- PROGRAM ----


main : Program () Model Msg
main =
    Browser.element
        { init = \_ -> init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


init : ( Model, Cmd Msg )
init =
    ( initialModel, Cmd.none )


initialModel : Model
initialModel =
    { turns = []
    }


subscriptions : Model -> Sub Msg
subscriptions _ =
    addTurn GotTurn



---- PORTS ----


port addTurn : (List String -> msg) -> Sub msg


port sendTurns : List(List String) -> Cmd msg


---- MODEL ----


type alias Model =
    { turns : List(List String)
    }

type alias Board 
    = List String


type Msg
    = GotTurn (List String)



---- UPDATE ----


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        GotTurn newTurn ->
            let
                newTurns = List.reverse (newTurn :: model.turns)
            in
            ( { model | turns = newTurns }, sendTurns newTurns )
            


---- VIEW ----



view : Model -> Html msg
view model =
    div [] []