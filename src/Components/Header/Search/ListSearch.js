import React, { Fragment } from "react"
import ProductSearch from "./ProductSearch"

const ListSearch = (props)=>{
    return(
        <Fragment >
     {(props.products.length)? <div className = "list_result">
        {props.products.map(product => <ProductSearch product = {product} />)}
    </div>: (props.error !== null)? <div className = "list_result">
                <div> <p className = "error">{`${props.error}`}</p></div>
            </div>:<div></div>
    }
    </Fragment>
    )
    
}
export default ListSearch