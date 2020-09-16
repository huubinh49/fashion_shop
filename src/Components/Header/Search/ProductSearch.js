import React from "react"
function convertName(str){
    return str.toLowerCase().split("").filter(item => item!==" ").join("").replace("'","");
}
const ProductSearch = (props)=>{
    
    return(

     <div  className = "product_result">
        <a href={`/product/${props.product["shop"]}/${props.product["name"]}/${props.product["id"]}`}className = "product__img--wrapper">
            <img src = {`https://res.cloudinary.com/dvrdu6gxa/img/img_${props.product["shop"]}/${convertName(props.product["name"])}_${props.product["swatches"][0]["name"]}_img.jpg`} alt="result product"></img>
        </a>
        <a href={`/product/${props.product["shop"]}/${props.product["name"]}/${props.product["id"]}`}className = "product__info">
            <strong>{props.product["name"]}</strong>
            <em>${props.product["price"]}</em>
        </a>
    </div>
    )
    
}
export default ProductSearch