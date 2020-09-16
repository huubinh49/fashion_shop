import React, {useState} from 'react'

export default function Toggle(props) {
  const [state, setState] = useState(false)
  return (     
  <div onMouseEnter = {()=>{
    if(props.drop_downMenu && window.innerWidth >=992){
      props.drop_downMenu(true)
      setState(true)  
    }
  }} 
  onMouseLeave = {()=>{
    if(props.drop_downMenu && window.innerWidth >=992){
      props.drop_downMenu(false)
      setState(false)  
    }
  }}
  onClick = {()=>{
    if(props.drop_downMenu){
    props.drop_downMenu(!state)
    setState(prev => !prev)
  }
}}
  className="dropdown__toggle">
      <a href={props.url}>{props.title}</a >
      <span
        data-onshow={`${state? "true":"false"}`}
        className="dropdown__icon"
       
      >
        <i className="dropdown__icon--open fa fa-angle-down" aria-hidden="true" />
        <i className="dropdown__icon--close fa fa-times" aria-hidden="true" />
      </span>
  </div>
  )
}
