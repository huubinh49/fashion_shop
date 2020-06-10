import { combineReducers } from "redux";
import { cartReducer } from "./cart_reducer";
import { collapse_reducer } from "./collapse_cart";
import { searchReducer } from "../Search/search_reducer";

const root_reducer = combineReducers({
    cart : cartReducer,
    collapse_cart: collapse_reducer,
    search: searchReducer
})
export {root_reducer};