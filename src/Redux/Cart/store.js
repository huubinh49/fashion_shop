import { root_reducer } from ".";


const saveState = (state)=>{
    localStorage.setItem("cart", JSON.stringify(state.cart))
    localStorage.setItem("search_result", JSON.stringify(state.search))
    console.log(localStorage.getItem("search_result"))
}
const redux = require("redux");
const store = redux.createStore(root_reducer);
store.subscribe(()=>{
    let cur_state = {cart: store.getState().cart, search: store.getState().search}
    saveState(cur_state);
})
export {store};