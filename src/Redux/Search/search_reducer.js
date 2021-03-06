const getLocalState = ()=>{
    const initialState = localStorage.getItem("search_result");
    if(!initialState){
        return [];
    }
    else
    return JSON.parse(initialState);
}


const initialize = getLocalState();
const result= (products)=>({
    type:"SEND_RESULT_SEARCH",
    payload:{
        products:products
    }
})

const searchReducer = (state = initialize, action)=>{
    if(action.type === "SEND_RESULT_SEARCH"){
        return [...action.payload.products];
    }
    else
    return state;
}

export {result, searchReducer};
