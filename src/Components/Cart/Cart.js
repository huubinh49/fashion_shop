import React, { Component } from 'react'
import CartProduct from './CartProduct';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './Cart.scss';

class Cart extends Component {
  componentDidUpdate = ()=>{
    // 400px
    if(this.props.display_cart===true){
      document.querySelector(".cart").classList.add("cart__showup");
    }
    else{
      document.querySelector(".cart").classList.remove("cart__showup");
    }
  }
    render() {
        return (
            <div className="cart">
  <div className="cart__header-wrapper">
    <div className="cart__header">
      <a href="/">MY CART</a>
      <div className="cart__header-close" onClick={()=> this.props.showCart()}>
        <strong>CLOSE</strong>
        <div className="icon-close" ></div>
      </div>
    </div>
  </div>
  <div className="cart__body">
    <div className="cart__body-product">
      {
        this.props.products.map((product, index) => <CartProduct key = {index} product = {product}/>) 
      }
    </div>
    <div className="cart__body-sideinfo">  
      <div className="cart__body-subtotal">
        <h3>SUBTOTAL</h3>
      <strong>${this.props.products.reduce((sum, cur)=>sum+cur.quantity*parseFloat(cur.price),0)}</strong>
      </div>
      <div className="cart__body-buy">
        <Link to = "/checkout" className="btn btn-danger">
          BUY AS GUEST
        </Link>
        <Link to = "/checkout" className="btn btn-danger">
          BUY AS MEMBER
        </Link>
      </div>
      <div className="jumbotron">
        <strong>Free U.S. shipping</strong>
        <strong>Free U.S. returns &amp; exchanges</strong>
        <strong className="jumbotron__MAP">
          MAP Guarantee
          <sup>TM</sup>
        </strong>
      </div>
    </div>
  </div>
</div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return ({
  products: state.cart,
  display_cart:state.collapse_cart
})
}


export default connect(mapStateToProps)(Cart);