import { combineReducers } from "redux";
import menu from '../menu'

const rootReducer = combineReducers({
  menu
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;