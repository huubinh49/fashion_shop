import React, { Component } from 'react'
import * as eventSlide from "./slide_gallery";
import { connect } from 'react-redux';
import { addToCart } from '../../Redux/Cart/action';

const {plus_rotate} = require("./news_details");

function convertName(str){
  return str.toLowerCase().split("").filter(item => item!==" ").join("").replace("'","");
}
 class ProductDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      product : {},
      product_img:"",

      //form
      color_name:"",
      size : "Small",
      quantity:1
    }
  }
  changeWatch = (color)=>{
    this.setState((state)=>({
      product_img: `${state.product["name"]}_${color}_img.jpg`,
      color_name: color
      }))
  }
  changeForm = (key, value)=>{
    let new_state = {...this.state};
    new_state[key]=value;
    this.setState(new_state);
  }
  addToCart = ()=>{
    // product_name, product_color, product_price, product_size, product_quantity
    let payload = {
      name:this.state.product["name"],
      color:this.state.color_name,
      size:this.state.size,
      price: this.state.product["price"],
      quantity:this.state.quantity,
      img_src : `/img/img_${this.props.match.params.shop}/asset/${convertName(this.state.product["name"])}_${convertName(this.state.color_name)}_img.jpg`
    }
    this.props.add_to_cart(payload);
  }
  componentDidMount = ()=>{
    let fetchData = async ()=>{
      const data_shop = await require(`./../Shop/${this.props.match.params.shop}.json`);
      return data_shop
    }

    fetchData().then(
      (data_shop)=>{
        const product_data = data_shop[parseInt(this.props.match.params.id)];
        this.setState({
          product:product_data,
          product_img:`${product_data["name"]}_${product_data["swatches"][0]["color_name"]}_img.jpg`,
          color_name:product_data["swatches"][0]["color_name"]
        
        });
      }
      
    );
    
    
  }
  changeQuantityByKey = (event)=>{
    switch (event.key) {
      case "ArrowUp":
      case "ArrowRight":
        this.changeForm("quantity", parseInt(event.target.value)+1);
      break;
      case "ArrowDown":
      case "ArrowLeft":
        if(event.target.value>1)
        this.changeForm("quantity", event.target.value-1);
        break;
      default:
        break;
    }
    
  }
    render() {
        return (
            <main className="container--96">
  <div className="row product--details">
    {/* Gallery Slide */}
    <div style={{ padding: 0 }} className="col-lg-8 slide_show">
      <div className="row slide_show--wrapper">
        <div style={{padding:"0 0 0 15px"}} className="col-lg-2 col-md-12 col-sm-12 col-xs-12 gallery container" id="gallery">
          <div className="album--wrapper">
            <div className="album">
            {
              this.state.product["swatches"]&&this.state.product["swatches"].map((swatch, index) =>{
                return(
                <div className="img">
                <img
                  onClick={()=> eventSlide.show_img(index)}
                  src={`/img/img_${this.props.match.params.shop}/asset/${convertName(this.state.product["name"])}_${convertName(swatch["color_name"])}_img.jpg`}
                  alt = "slide-product"
                />
              </div> 
              )})
              
              }
            </div>
            <i
              onClick= {() => eventSlide.change_img(1)}
              className="gallery-btn next fa fa-angle-down"
              aria-hidden="true"
            />
            <i
              onClick={() => eventSlide.change_img(-1)}
              className="gallery-btn pre fa fa-angle-up"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 slide">
          <div className="slide__current" aria-selected="false">
            <img
              id="img__current"
              src={`/img/img_${this.props.match.params.shop}/asset/${convertName(this.state.product_img)}`}
              alt = "slide-product"
            />
            <i
              onClick={() => eventSlide.change_img(1)}
              className="slide-btn next fa fa-angle-right"
              aria-hidden="true"
            />
            <i
              onClick={() => eventSlide.change_img(-1)}
              className="slide-btn pre fa fa-angle-left"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
    {/* Card */}
    <div style={{ padding: 0 }} className="col-lg-4 card--detail">
      <h3 className="card__name">{this.state.product["name"]}</h3>
      <div className="card__detail">
        <div className="card__detail--price">
          <strong className="price">{this.state.product["price"]}</strong>
          <p className="other__price">
            or 4 interest-free installments of $17.25 by
            <img
              src="https://static.afterpay.com/integration/product-page/logo-afterpay-colour.png"
              alt = "slide-product"
            />
          </p>
        </div>
        <div className="card__detail--color">
          <p>
        <span>Color: </span><strong>{this.state.color_name.replace(/^\w/g, c=> c.toUpperCase())}</strong>
          </p>
          <div className="switch_color">
            
            {
              this.state.product["swatches"]&&this.state.product["swatches"].map((swatch, index) =>{
                if(index===0)
                return(
                  <label className="color" key={index} style={{
                    //`${this.props.product["name"]}_${item["color_name"]}_color.png`
                    //techshirtpopover-women's_khaki_color.png
                    backgroundImage:`url(/img/img_${this.props.match.params.shop}/asset/${convertName(`${this.state.product["name"]}_${swatch["color_name"]}_color.png`)})`,
                    backgroundPosition:"center",
                    backgroundSize : "cover"
                    }}
                    // this.changeWatch(swatch["color_name"])
                    onClick ={()=>{
                      eventSlide.show_img(index); 
                      this.changeWatch(swatch["color_name"])
                      }}
                    >
                    <input type="radio" name="color" defaultChecked="checked" />
                    <div className="stuff" />
                  </label>
                )
                else return(
                  <label className="color" style={{
                    //`${this.props.product["name"]}_${item["color_name"]}_color.png`
                    //techshirtpopover-women's_khaki_color.png
                    backgroundImage:`url(/img/img_${this.props.match.params.shop}/asset/${convertName(`${this.state.product["name"]}_${swatch["color_name"]}_color.png`)})`,
                    backgroundPosition:"center",
                    backgroundSize : "cover"
                    }}
                    onClick ={()=>{
                      eventSlide.show_img(index);
                      this.changeWatch(swatch["color_name"])
                    }}
                    >
                    <input type="radio" name="color" />
                    <div className="stuff" />
                  </label>
                )
            
            
            })
            }
            
           
          </div>
        </div>
        <div className="card__detail--size">
          <p>
          <span>Size: </span><strong>{this.state.size}</strong>
          </p>
          <form className="switch_size">
            <label className="size">
              <input
                onClick = {(event)=>this.changeForm("size", event.target.value)}type="radio"
                name="size"
                defaultChecked="checked"
                value = "Small"
              />
              <em>Small</em>
            </label>
            <label className="size">
              <input onClick = {(event)=>this.changeForm("size", event.target.value)}type="radio" name="size" value="Medium"/>
              <em>Medium</em>
            </label>
            <label className="size">
              <input onClick = {(event)=>this.changeForm("size", event.target.value)}type="radio" name="size" value="Large"/>
              <em>Large</em>
            </label>
            <label className="size">
              <input onClick = {(event)=>this.changeForm("size", event.target.value)}type="radio" name="size"value="X-Large" />
              <em>X-Large</em>
            </label>
          </form>
        </div>
        <div className="card__detail--cart">
          <input id= "cart__quantity" onKeyDown = {this.changeQuantityByKey} type="text" value = {this.state.quantity} onChange={(event)=> this.changeForm("quantity", event.target.value)}/>
          <button onClick = {this.addToCart} className="btn btn-danger">ADD TO CART</button>
        </div>
        <div className="jumbotron">
          <strong>Free U.S. shipping</strong>
          <strong>Free U.S. returns &amp; exchanges</strong>
          <strong className="jumbotron__MAP">
            MAP Guarantee
            <sup>TM</sup>
          </strong>
        </div>
        <p>
          A lightweight cotton button up, perfect for strolling on the beach or
          wearing around town. This bright shirt features a custom floral print
          with some of our favorite Colorado wildflowers.
        </p>
        <div id="accordianId" role="tablist" aria-multiselectable="true">
          <div className="card">
            <div
              onClick={(event) => {
                plus_rotate(document.querySelector("#section1HeaderId"));
              }}
              className="card-header"
              role="tab"
              id="section1HeaderId"
            >
              <h5 className="mb-0">
                <a
                  className="accordian__toggle"
                  data-toggle="collapse"
                  data-parent="#accordianId"
                  href="#description"
                  aria-expanded="true"
                  aria-controls="section1ContentId"
                >
                  <h6>Description</h6>
                  <div className="plus" />
                </a>
              </h5>
            </div>
            <div
              id="description"
              className="collapse in"
              role="tabpanel"
              aria-labelledby="section1HeaderId"
            >
              <div className="card-body">
                <p>
                  Easy breezy. Our Tour Shirt is a warm weather must-have with
                  oversized BDU buttons and a casual straight fit. Each shirt
                  features a custom print that was illustrated right here in
                  Colorado by our in-house design team.
                </p>
                <ul className="accordian__list">
                  <li>Chest patch pocket</li>
                  <li>Oversized BDU buttons</li>
                  <li>Side vent detail</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div
              onClick={(event) => {
                plus_rotate(document.querySelector("#section2HeaderId"));
              }}
              className="card-header"
              role="tab"
              id="section2HeaderId"
            >
              <h5 className="mb-0">
                <a
                  className="accordian__toggle"
                  data-toggle="collapse"
                  data-parent="#accordianId"
                  href="#features"
                  aria-expanded="true"
                  aria-controls="section2ContentId"
                >
                  <h6>Features &amp; Specs</h6>
                  <div className="plus" />
                </a>
              </h5>
            </div>
            <div
              id="features"
              className="collapse in"
              role="tabpanel"
              aria-labelledby="section2HeaderId"
            >
              <div className="card-body">
                <ul className="accordian__list">
                  <li>Straight fit</li>
                  <li>Oversized BDU button closure</li>
                  <li>Banded collar</li>
                  <li>Single chest patch pocket</li>
                  <li>Side vent detail</li>
                </ul>
                <p>
                  <strong>Materials:</strong>
                  100% organic cotton, 4oz
                </p>
                <p>
                  <strong>Style:</strong>
                  Straight fit
                </p>
                <p>Made in Vietnam</p>
                <span>Size chart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  {/* Done div row product-details */}
  {/* Product on Real */}
  <div className="row model_album"></div>
</main>

        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        add_to_cart : (product)=>{dispatch(addToCart(product)); dispatch({type:"COLLAPSE_CART"})},
        
      }
}

export default connect(null, mapDispatchToProps)(ProductDetail);
