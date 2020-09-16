import { root_reducer } from ".";
import thunk from 'redux-thunk' 

const saveState = (state)=>{
    localStorage.setItem("cart", JSON.stringify(state.cart))
    localStorage.setItem("search_result", JSON.stringify(state.search))
}
const redux = require("redux");
const store = redux.createStore(root_reducer, redux.applyMiddleware(thunk));
store.subscribe(()=>{
    let cur_state = {cart: store.getState().cart, search: store.getState().search}
    saveState(cur_state);
})
export {store};