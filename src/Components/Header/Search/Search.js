import React, {
     useRef, useState
} from 'react'
import ListSearch from './ListSearch'
import { result } from '../../../Redux/Search/search_reducer'
import {  useDispatch } from 'react-redux'
import productAPI from './../../../API/productAPI'
import './Search.scss'
export default function Search (props) {
    const [res, setResult] = useState([])
    const [error, setError] = useState([])
    const search = (query)=>{
        if(query !== ""){
            productAPI.getByName(query)
            .then(
                res => {
                    setResult(res)
                }
        
            )
            .catch(
                error=> {
                    setError(error)
                }
            )
        }
    }
    const dispatch = useDispatch();
    const send_result = (products)=>{
        dispatch(result(products))
    }
    const search_debounce = useRef(null)
    const autoSearch = (event)=>{
        if(event.target){
            clearTimeout(search_debounce.current);
            let query = event.target.value
            search_debounce.current= setTimeout(()=>search(query),500);
        }
    }
    return ( 
            (props.isShow)? <div className = "search" >
                <div className = "close">
                    <i className="fa fa-times" aria-hidden="true" onClick ={()=>props.setShow()}></i>
                </div>
            <div className = "search_form" >
                    <input onChange={(event)=> autoSearch(event)} type = "text"  id = "search_input" aria-describedby = "helpId"placeholder = "Search for products" autoFocus/>
                    <a onClick={
                        (event)=>{
                            send_result(res)
                        }}
                         href="/shop/search_result" className = "search__submit" >
                        <i className = "fa fa-search" aria-hidden = "true" / >
                    </a> 
            </div>
            <ListSearch error = {error} products = {res}/>
        </div>: <></>

        )
}
