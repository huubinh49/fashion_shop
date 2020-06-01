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
export {addToCart, deleteCart};