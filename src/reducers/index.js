import { combineReducers } from "redux";
import PlayerReducer from "./player_reducer";

const rootReducer = combineReducers({
  player: PlayerReducer //your global application state
});

export default rootReducer;
