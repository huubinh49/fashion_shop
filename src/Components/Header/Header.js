import React, { Component } from 'react'
import Toggle from './Toggle'
import Headerdata from './../headerData.json'
import SubMenu from './SubMenu'
import SubMenuHuge from './SubMenuHuge'
import Cart from './../Cart/Cart'
import * as event_header from './header_event'
import { connect } from 'react-redux'
class Header extends Component {
    constructor(props){
      super(props);
      this.state={
        quantity:0
      }
    }
    render() {
        return (
        <div>
            <div className="over--black" />
            <Cart showCart={this.props.collapse_cart}/>
            {/* Header */}
            <header className="container--96">
              <a href= "/">
              <img
                src="https://cdn.shopify.com/s/files/1/0277/0693/files/topo_designs_logo_vertical-logo.svg?v=1652876766858419023"
                alt="logo"
                className="header__brand--pc"
              />
              </a>
              <a href= "/">
              <img
                src="https://cdn.shopify.com/s/files/1/0277/0693/files/topo_designs_logo_horizontal_432x_c57bc56a-a610-4d86-a08d-1b70e02a0064_432x.png?v=1534299399"
                alt="logo"
                className="header__brand--mobile"
              />
              </a>
                {/* Open Collapse Icon */}
              <i
                onClick={event=>event_header.open_collapse(event.target)}
                data-collapse="nav--collapse"
                className="nav__open--collapse fa fa-bars"
                aria-hidden="true"
              />

              <nav id="nav--collapse">
                <ul className="nav__menu">
                  {/* Close Collapse Icon */}
                  <li className="nav__item">
                    <i
                      onClick={event=>event_header.close_collapse(event.target)}
                      data-collapse="nav--collapse"
                      className="nav__close--collapse fa fa-times"
                      aria-hidden="true"
                    ></i>
                  </li>
                  {
                    Headerdata.map((nav_item, index)=>{
                      if(nav_item.isHuge===false)
                      return(
                          <li key={index} className="nav__item nav__item--dropdown">
                            <Toggle url={nav_item.url} title={nav_item.title}></Toggle>
                            <SubMenu menu={nav_item.menu}></SubMenu>
                          </li>
                      )
                      else return(
                        <li key={index} className="nav__item nav__item--dropdown">
                        <Toggle url={nav_item.url} title={nav_item.title}></Toggle>
                          <SubMenuHuge menuHuge={nav_item.menuHuge}></SubMenuHuge>
                        </li>
                      )
                    })
                  }
                  <li className="nav__item">
                    <a href="/lookbook" className="dropdown__toggle">
                      <strong>lookbook</strong>
                    </a>
                  </li>

                  <hr />

                  <li className="nav__item--signin">
                    <i className="fa fa-user-circle" aria-hidden="true" />
                    <a href="#" className="signin">
                      JOIN/SIGN IN
                    </a>
                  </li>

                </ul>
              </nav>

              <div className="header__action">
                <a href="#" className="signin">
                  Join/Sign In
                </a>
                <i className="fa fa-search" aria-hidden="true" />
                <div className="shopping-cart" >
                  <i onClick={()=>this.props.collapse_cart()} data-quantity = {this.props.cart.length} className="fa fa-shopping-cart" aria-hidden="true"/>
                </div>
              </div>
            </header>
          </div>
          
        );
    }
}

const mapStateToProps = (state) => ({
  cart : state.cart
})
const mapDispatchToProps = (dispatch)=>({
  collapse_cart: ()=>dispatch({type:"COLLAPSE_CART"})
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);