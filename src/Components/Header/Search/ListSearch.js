import React from "react"
import ProductSearch from "./ProductSearch"

const ListSearch = (props)=>{
    return(
     props.products.length? <div className = "list_result">
        {props.products.map(product => <ProductSearch product = {product} />)}
    </div>: <></>
    )
    
}
export default ListSearch