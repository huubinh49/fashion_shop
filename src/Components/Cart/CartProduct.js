import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deleteCart, updateCart } from '../../Redux/Cart/action';

class CartProduct extends Component {
    render() {
        return (
    <div className="cart__product">
        <div className="product__img--wrapper">
          <img
            src={this.props.product.img_src}
            alt="product"
            className="product__img"
          />
        </div>
        <div className="product__info">
          <div >
            <a href={`/product/${this.props.product["shop"]}/${this.props.product["name"].split("").filter(item => item !== " ").join("")}/${this.props.product["ID"]}`} className="product__name">{this.props.product.name}</a>
            <i className="fa fa-times" aria-hidden="true" onClick={()=>this.props.delete_cart(this.props.product)}/>
          </div>
          <div className="product__info--detail">
            <strong className="product__info-text">{this.props.product.color.toUpperCase()}</strong>
        <strong className="product__info-text">{this.props.product.size}</strong>
          </div>
          <div className="product__quantity">
            <input
              className="product__info-text"
              type="number"
              name = "something"
              max={21}
              min={1}
              onChange={(event)=> this.props.update_cart({...this.props.product, quantity:event.target.value})}
              value = {this.props.product.quantity}
            />
            <strong className="product__price">${parseFloat(this.props.product.price.split("").slice(1).join(""))*this.props.product.quantity}</strong>
          </div>
        </div>
      </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
  delete_cart: (product) => dispatch(deleteCart(product)),
  update_cart: (product) => dispatch(updateCart(product))
})


export default connect(null,mapDispatchToProps)(CartProduct);