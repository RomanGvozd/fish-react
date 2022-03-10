import { createStore, combineReducers } from "redux";
import baskedReducer from "./basked/reducer";

const root = combineReducers({basked: baskedReducer});

export default createStore(root);