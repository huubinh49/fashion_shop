const addToCart = (product)=>{
    return (
        {
            type:"ADD_TO_CART",
            product:product
        }
    )
}

const deleteCart  = (product) =>{
    return (
        {
            type:"DELETE_CART",
            product
        }
    )
}
const updateCart  = (product) =>{
    return (
        {
            type:"UPDATE_CART",
            product
        }
    )
}
//async action
const cleanCart = ()=>{
    return dispatch =>{ 
        localStorage.removeItem('cart');
        dispatch({
            type : "CLEAN_CART"
        })
    }
}
 
export {addToCart, deleteCart, updateCart, cleanCart};