import './Header.scss'
import React, { Fragment, useEffect, useState } from 'react'
import Toggle from './Toggle'
import SubMenuHuge from './SubMenuHuge'
import Headerdata from '../headerData.json'
import SubMenu from './SubMenu'
import { useRef } from 'react'
import Cart from '../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import Search  from './Search/Search'
import * as authAction from '../../Redux/authenticate/auth_action'

export default function HeaderTmp(props){
    const nav = useRef(null);
    const header = useRef(null);
    const [isShow, setShow] = useState(false);
    const [dropdownState, setDropdownState] = useState(new Array(Headerdata.length).fill(false));
    useEffect(() => {
        const scrollBehavior = ()=>{
            const  currentWidth = window.innerWidth;
            const  currentY = window.pageYOffset;

            if(currentY < header.current.offsetHeight){
                header.current.classList.remove("header__pc--onScroll");
                header.current.classList.remove("header__mobile--onScroll");
            }else{
                if(currentWidth < 992){
                    header.current.classList.remove("header__pc--onScroll");
                    header.current.classList.add("header__mobile--onScroll");
                }else{
                    header.current.classList.remove("header__mobile--onScroll");
                    header.current.classList.add("header__pc--onScroll");
                }
            }

        }
        scrollBehavior();
        window.addEventListener('scroll', scrollBehavior);
        return () => {
            window.removeEventListener('scroll', scrollBehavior);
        }
    }, [])
    //Cart feature
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const collapse_cart = ()=>{
        dispatch({type : "COLLAPSE_CART"})
    }
    return(
        <Fragment>
        <Cart showCart = {collapse_cart}/>
        <header ref = {header}>
            <div className = "header__content">
                {/* Open Collapse button */}
                <div className = "nav__collapse--open">
                     <i className="fa fa-bars" 
                     onClick={()=>{
                         nav.current.style.width = "270px";
                     }} 
                    aria-hidden="true"/> 
                </div>
                <div className = "header__brand">
                    <a href = "/">
                        <img className="header__brand--pc" src="https://cdn.shopify.com/s/files/1/0277/0693/files/topo_designs_logo_vertical-logo.svg?v=1652876766858419023" alt="logo"/>
                        <img className="header__brand--mobile" src="https://cdn.shopify.com/s/files/1/0277/0693/files/topo_designs_logo_horizontal_432x_c57bc56a-a610-4d86-a08d-1b70e02a0064_432x.png?v=1534299399"alt="logo"/>
                    </a>
                </div>
                <nav ref = {nav} className = "header__navigation">
                    <div className = "nav__content">
                        <ul className = "nav__menu">
                            {/* Close Collapse Icon */}
                            <li className="nav__item">
                                <div className ="nav__collapse--close ">
                                    <i
                                        onClick={()=>{
                                            nav.current.style.width = "0px";
                                        }}
                                      className="fa fa-times"
                                      aria-hidden="true"
                                    />
                                </div>
                            </li>
                            {
                                Headerdata.map((nav_item, index)=>{
                                  if(nav_item.isHuge===false)
                                  return(
                                      <li key={index} className="nav__item nav__item--dropdown">
                                        <Toggle drop_downMenu = {(val) => setDropdownState((prev)=>{
                                          const newState = [...prev];
                                          newState[index] = val
                                          return newState;
                                      })} url={nav_item.url} title={nav_item.title}></Toggle>
                                        {dropdownState[index] && <SubMenu drop_downMenu = {(val) => setDropdownState((prev)=>{
                                          const newState = [...prev];
                                          newState[index] = val;
                                          return newState;
                                      })} isSubmenu = {true} menu={nav_item.menu}></SubMenu>}
                                      </li>
                                  )
                                  else return(
                                    <li key={index} className="nav__item nav__item--dropdown">
                                      <Toggle drop_downMenu = {(val) => setDropdownState((prev)=>{
                                          const newState = [...prev];
                                          newState[index] = val;
                                          return newState;
                                      })} url={nav_item.url} title={nav_item.title}></Toggle>
                                      {dropdownState[index] && 
                                      <SubMenuHuge drop_downMenu = {(val) => setDropdownState((prev)=>{
                                        const newState = [...prev];
                                        newState[index] = val;
                                        return newState;
                                    })} menuHuge={nav_item.menuHuge}></SubMenuHuge>}
                                    </li>
                                  )
                                })
                            }
                            <li className="nav__item">
                                <a href="/lookbook">
                                  <strong>lookbook</strong>
                                </a>
                            </li>
                            <hr />
                            <li className = "nav__item nav__item-action--collapse">
                              {
                              (props.isAuthenticated)?
                              (<div className = "action"><a href = "/account">My Account</a><span>/</span><a onClick = {()=>authAction.authLogout()} href = "/account">Log Out</a></div>):
                              (<div className = "action"><a href ="/account/signup/">Join</a><span>/</span><a href ="/account/signin/">Sign in</a></div>)
                              }
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className = "header__action">
                    {
                        (props.isAuthenticated)?
                        ((<div className = "action"><a href = "/account">My Account</a><span>/</span><a onClick = {()=>authAction.authLogout()} href = "/account">Log Out</a></div>)):
                        (<div className = "action"><a href ="/account/signup/">Join</a><span>/</span><a href ="/account/signin/">Sign in</a></div>)

                    }
                    
                    <i onClick = {()=> setShow(true)} className="fa fa-search" aria-hidden="true" />
                    <div className="shopping-cart" >
                      <i onClick = {collapse_cart} className="fa fa-shopping-cart" aria-hidden="true" data-quantity = {cart.reduce((sum, cur)=>sum+parseInt(cur['quantity']), 0)}/>
                    </div>
                </div>
            </div>
        </header>
        <Search isShow = {isShow} setShow = {()=>setShow(prev=>!prev)} />
        </Fragment>
    )
}