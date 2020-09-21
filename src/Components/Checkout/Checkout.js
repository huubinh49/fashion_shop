import React from 'react'
import Breadcrumb from './Breadcrumb'
import {Link} from 'react-router-dom'
import Form from './Form'
import "./Checkout.scss"
export default function Checkout(props){
    const breadcrumbs = [
        {
            to : "/mycart",
            label: "Cart"
        },
        {
            to: "/checkout/information",
            label: "Information"
        },
        {
            to: "/checkout/shipping",
            label: "Shipping"
        },
        {
            to: "/checkout/payment",
            label: "Payment"
        }
    ]
    return(
        <section className = "checkout">
            <div className = "container">
                <div className = "brand">
                    <img className="header__brand--mobile" src="https://cdn.shopify.com/s/files/1/0277/0693/files/topo_designs_logo_horizontal_432x_c57bc56a-a610-4d86-a08d-1b70e02a0064_432x.png?v=1534299399"alt="logo"/>
                </div>
                <Breadcrumb>
                    <ul>
                        {breadcrumbs.map((item, index)=>(
                            <li className = "active" key = {index}>
                                <Link to = {item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Breadcrumb>
                <div className = "checkout__express">
                    <h2>Express checkout</h2>
                    <div className = "checkout__express-option">
                        <div className = "option">
                            <img src = "/visa.svg"></img>
                        </div>
                        <div className = "option">
                            <img src = "/paypal.svg"></img>
                        </div>
                    </div>
                </div>
                <div className = "checkout__alternative">
                    <span>OR CHECK OUT USING YOUR WALLET</span>
                </div>
                <Form />
            </div>
        </section>
    )
}