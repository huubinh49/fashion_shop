import { root_reducer } from ".";


const saveState = (state)=>{
    localStorage.setItem("cart", JSON.stringify(state))
}

const redux = require("redux");
const store = redux.createStore(root_reducer);
store.subscribe(()=>{
    saveState(store.getState().cart);
})
export {store};