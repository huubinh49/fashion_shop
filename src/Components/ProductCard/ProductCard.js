import React, { Component } from 'react'
import cardStyle from "./style.css";
import { Route } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';
function convertName(str){
  return str.toLowerCase().split("").filter(item => item!==" ").join("").replace("'","");
}
export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state ={
      product_img:`${this.props.product["name"]}_${this.props.product["swatches"][0]["color_name"]}_img.jpg` ,
      isShow:true
    }
  }
    changeWatch = (color)=>{
      this.setState({
        product_img: `${this.props.product["name"]}_${color}_img.jpg`
        })
    }
    componentDidMount = ()=>{
      if(window.innerWidth<989){
        this.setState({isShow:false})
      }else
      {
        this.setState({isShow:true})
      }
      window.addEventListener("resize", ()=>{
        if(window.innerWidth<989){
          this.setState({isShow:false})
        }else
        {
          this.setState({isShow:true})
        }
      })
      
    }
    render() {
        return (
            <div className={"card col-lg-3 col-md-4 col-sm-6"} style = {(this.props.inHeader)? (this.state.isShow==false)?{display:"none"}:{borderLeft:"1px solid gray"}:{}}>
              
                <div className="badge__wrapper">
                  <strong className="card__badge">NEW</strong>
                </div>
                <a href={`/product/${this.props.shop}/${this.props.product["name"].split("").filter(item => item != " ").join("")}/${this.props.ID}`} className="img__wrapper">
                  <img alt="product" className="card__img" src={`/img/img_${this.props.shop}/asset/${convertName(this.state.product_img)}`} />
                </a>
                <div className="info__wrapper">
                  <ul className="color__wrapper">
                    {this.props.product["swatches"].map((item, index) =>{
                      
                      return (
                        //image_name = "{0}_{1}_img.jpg".format(product_name, d[i]["swatches"][j]["color_name"])
                        // color_name = "{0}_{1}_color.png".format(product_name, d[i]["swatches"][j]["color_name"])
                        // ${productitem["colorcolor_name"]}
                              <li key={index} onClick={()=>this.changeWatch(item["color_name"])} style={{
                                //`${this.props.product["name"]}_${item["color_name"]}_color.png`
                                //techshirtpopover-women's_khaki_color.png
                                backgroundImage:`url(/img/img_${this.props.shop}/asset/${convertName(`${this.props.product["name"]}_${item["color_name"]}_color.png`)})`,
                                backgroundPosition:"center",
                                backgroundSize : "cover"
                                }}>
                                <input type="radio" name="color_list" />
                                <span/>
                              </li>
                      )
                    })}
                  </ul>
                  <a href={`/product/${this.props.shop}/${convertName(this.props.product["name"])}`} className="card__title">
                    <p>{this.props.product["name"]}</p>
                  </a>
                  <strong className="card__price">{this.props.product["price"]}</strong>
                </div>
          </div>
        )
    }
}
