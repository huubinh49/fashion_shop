import React from 'react'
import Form from './Form'
import "./Checkout.scss"
import CartProduct from '../Cart/CartProduct'
import { useSelector } from 'react-redux'
export default function Checkout(props){
    const products =  useSelector(state => state.cart);
    return(
        <section className = "checkout container">
            <div className = "row">
                <div className = "brand col-sm-12">
                    <img className="header__brand--mobile" src="https://cdn.shopify.com/s/files/1/0277/0693/files/topo_designs_logo_horizontal_432x_c57bc56a-a610-4d86-a08d-1b70e02a0064_432x.png?v=1534299399" alt="logo"/>
                </div>
                <div className = "col-md-6 col-sm-12">
                    <div className = "checkout__express">
                        <h2>Express checkout</h2>
                        <div className = "checkout__express-option">
                            <div className = "option">
                                <img src = "/visa.svg" alt = "visa-logo"></img>
                            </div>
                            <div className = "option">
                                <img src = "/paypal.svg" alt = "paypal-logo"></img>
                            </div>
                        </div>
                    </div>
                    <div className = "checkout__alternative">
                        <span>OR CHECK OUT USING YOUR WALLET</span>
                    </div>
                    <Form />
                </div>
                <div className = "col-md-6 col-sm-12 cart-preview">
                    <h2>Preview Cart</h2>
                    <div className = "cart__body">
                        <div className="cart__body-product">
                              {
                                products.map((product, index) => <CartProduct key = {index} product = {product}/>) 
                              }
                        </div>
                        <div className="cart__body-sideinfo">  
                            <div className="cart__body-subtotal">
                              <h3>SUBTOTAL</h3>
                            <strong>${products.reduce((sum, cur)=>sum+cur.quantity*parseFloat(cur.price),0)}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}