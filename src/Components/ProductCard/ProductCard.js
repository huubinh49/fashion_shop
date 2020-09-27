import React, { useEffect } from 'react';
import { useState } from 'react';
import ImageLoader from 'react-load-image';
import Preloader from '../LoaddingScreen';
function convertName(str){
  return str.toLowerCase().split("").filter(item => item!==" ").join("").replace("'","");
}
export default function ProductCard(props){

  const [productImg, setProductImg] = useState(`${props.product["name"]}_${props.product["swatches"][0]["name"]}_img.jpg`);
  const [isMenu, setIsMenu] = useState(true);
    const changeWatch = (color)=>{  
      setProductImg(`${props.product["name"]}_${color}_img.jpg`)
    }
    useEffect(()=>{
      setProductImg(`${props.product["name"]}_${props.product["swatches"][0]["name"]}_img.jpg`)
    }, [props.product])
    useEffect(() => {
      const adjust = ()=>{
        if(window.innerWidth<989){
          setIsMenu(false);
        }else
        {
          setIsMenu(true)
        }
      }
      adjust();
      window.addEventListener("resize", adjust)
      return () => {
        window.removeEventListener("resize", adjust)
      }
    }, [])

        return (
            <div className={`card ${!props.inHeader? "col-lg-3 col-md-4 col-sm-6":""}`} style = {(props.inHeader)? (isMenu===false)?{display:"none"}:{borderLeft:"1px solid gray"}:{}}>
                <div className="badge__wrapper">
                  <strong className="card__badge">NEW</strong>
                </div>
                <a href={`/product/${props.product["shop"]}/${props.product["name"].split("").filter(item => item !== " ").join("")}/${props.product["id"]}`} className="img__wrapper">
                  <ImageLoader alt="product-loadding" className="card__img" src={`https://res.cloudinary.com/dvrdu6gxa/img/img_${props.product["shop"]}/${convertName(productImg)}`} >
                    <img alt="product" className="card__img"/> {/*1st element will be rendered if loaded image*/}
                    <Preloader/> {/*2nd element will be rendered if occur error*/}
                    <Preloader/> {/*3rd element is preloader*/}
                  </ImageLoader>
                </a>
                <div className="info__wrapper">
                  <ul className="color__wrapper">
                    {props.product["swatches"].map((item, index) =>{
                      
                      return (
                              <li key={index} onClick={()=>changeWatch(item["name"])} style={{
                                backgroundImage:`url(https://res.cloudinary.com/dvrdu6gxa/img/img_${props.product["shop"]}/${convertName(`${props.product["name"]}_${item["name"]}_color.png`)})`,
                                backgroundPosition:"center",
                                backgroundSize : "cover"
                                }}>
                                <input type="radio" name="color_list" />
                                <span/>
                              </li>
                      )
                    })}
                  </ul>
                  <a href={`/product/${props.product["shop"]}/${convertName(props.product["name"])}`} className="card__title">
                    <p>{props.product["name"]}</p>
                  </a>
                  <strong className="card__price">${props.product["price"]}</strong>
                </div>
          </div>
        )
}
