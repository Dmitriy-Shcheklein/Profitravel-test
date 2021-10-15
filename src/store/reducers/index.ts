import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer";


const rootReducer = combineReducers({
  mainReducer,
});

type RootState = ReturnType<typeof rootReducer>

export {
  rootReducer,
}

export type {
  RootState,
}