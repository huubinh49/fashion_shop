import React, { useEffect, useState } from 'react'
import "./Pagination.scss"
export default function Pagination(props) {
    const [listPage, setListPage] = useState([])

    useEffect(() => {
        setListPage(new Array(props._totalPages).fill(0).map((item, index) => index+1))
    }, [props._totalPages])  

    const handlePageChange = (curPage)=>{
        if(curPage>=1 && curPage <= props._totalPages)
        props.setPagination({_totalPages:props._totalPages, _quantity:10, _curPage:curPage})
    }
    return(
        <section className = "pagination">
            <ul>
                <li onClick = {()=>handlePageChange(props._curPage-1)} className ={`arrow arrow--prev ${(props._curPage <= 1)? "disable":""}`}>
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </li>
                {
                listPage.map((item)=>{
                      return  <li onClick = {()=>handlePageChange(item)} key={item} className = {`list_page ${(item===props._curPage)? "active" : ""}`}>{item}</li>
                })
                }
                <li onClick = {()=>handlePageChange(props._curPage+1)} className ={`arrow arrow--next ${(props._curPage >= props._totalPages)? "disable":""}`}>
                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                </li>
            </ul>
        </section>
    )
    
}