import React, { Fragment, useState } from 'react'
import SubMenu from './SubMenu'
import Toggle from './Toggle'

export default function SubMenuHuge (props) {
        const [dropdownState, setDropdownState] = useState(new Array(props.menuHuge.length).fill(false));
        return (
            <div 
            
            onMouseEnter = {()=>{
              if(props.drop_downMenu && window.innerWidth >=992){
                props.drop_downMenu(true)
              }
            }} 
            onMouseLeave = {()=>{
              if(props.drop_downMenu && window.innerWidth >=992){
                props.drop_downMenu(false)
              }
            }}
             className="dropdown__menu--huge">


              <ul onMouseEnter = {()=>{
                if(props.drop_downMenu && window.innerWidth >=992){
                  props.drop_downMenu(true)
                }
              }} 
            >
                  
                  {
                    props.menuHuge.map((menu, index)=>{
                      return(
                            <li
                            style={{width:"100%"}} key={index}>
                                <Toggle drop_downMenu = {(val) => setDropdownState((prev)=>{
                                          const newState = [...prev];
                                          newState[index] = val
                                          return newState;
                                      })} url={menu.url} title={menu.title}></Toggle>
                                {
                                  (window.innerWidth >=992||dropdownState[index])? <Fragment>
                                    <SubMenu menu ={menu.listMenu}></SubMenu> 
                                    <div className="dropdown__footer">{menu.footer}</div>
                                    </Fragment>: <Fragment></Fragment>
                                }
                                
                            </li>
                            )})
                  }
                </ul>
                {/* <ProductCard shop="shop_news" product={this.state.product} inHeader = {true}/> */}
            </div>
        )
}
