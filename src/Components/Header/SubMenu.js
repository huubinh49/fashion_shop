import React from 'react'

export default function SubMenu (props) {
    
        return (
        <ul onMouseEnter = {()=>{
            if(props.drop_downMenu && window.innerWidth >=992){
              props.drop_downMenu(true)
            }
          }} 
          onMouseLeave = {()=>{
            if(props.drop_downMenu  && props.isSubmenu && window.innerWidth >=992){
              props.drop_downMenu(false)
            }
          }} 
           className="dropdown__menu">
            {
                props.menu.map((listItem, index) => {
                    return(
                    <li key={index} className="dropdown__item">
                      <a href={listItem.url}>{listItem.title}</a>
                    </li>)
                    
                })
            }
        </ul>
        )
}
