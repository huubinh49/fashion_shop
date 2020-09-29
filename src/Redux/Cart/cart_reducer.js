const getLocalState = ()=>{
        const initialState = localStorage.getItem("cart");
        if(!initialState){
            return [];
        }
        else
        return JSON.parse(initialState);
}


let initialState = getLocalState();

const cartReducer = (state= initialState, action)=>{
    switch (action.type) {
        case "ADD_TO_CART":{
            const new_cart = [...state];

            let pos = new_cart.findIndex(item => item.name===action.product.name&&item.color===action.product.color&&item.size===action.product.size);
            if(pos !==-1){
                let new_product = {...new_cart[pos]};
                new_product.quantity=parseInt(new_cart[pos].quantity)+parseInt(action.product.quantity);   
                new_cart[pos] = new_product;
            }
            else
            new_cart.push(action.product);

            return new_cart;
        }
        case "DELETE_CART":{
            let pos = state.findIndex(item => item.name===action.product.name&&item.color===action.product.color&&item.size===action.product.size);
            
            const new_cart = [...state];
            if(pos !==-1){
             new_cart.splice(pos, 1);
            }

            return new_cart;
        }
        case "UPDATE_CART":{
            
            const new_cart = [...state];

            let pos = new_cart.findIndex(item => item.name===action.product.name&&item.color===action.product.color&&item.size===action.product.size);
            if(pos !==-1){
                let new_product = {...new_cart[pos]};
                new_product.quantity=action.product.quantity;   
                new_cart[pos] = new_product;
            }
            else
            new_cart.push(action.product);

            return new_cart;
        }
        case "CLEAN_CART":{
            return [];
        }
        default:
            return state;
    }
};

export {cartReducer};