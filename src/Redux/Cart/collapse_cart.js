let initialState = false;


const collapse_reducer = (state=initialState, action)=>{
    switch (action.type) {
        case "COLLAPSE_CART":
            return !state;
    
        default:
            return state;
    }

}
export {collapse_reducer};