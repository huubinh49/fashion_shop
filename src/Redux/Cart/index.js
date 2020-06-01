import { combineReducers } from "redux";
import { cartReducer } from "./cart_reducer";
import { collapse_reducer } from "./collapse_cart";

const root_reducer = combineReducers({
    cart : cartReducer,
    collapse_cart: collapse_reducer
})
export {root_reducer};