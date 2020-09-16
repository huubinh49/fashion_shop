import React, { Suspense,lazy, useState, useEffect } from 'react'
import Preloader from '../LoaddingScreen';
import shopAPI from '../../API/shopAPI';
import { useSelector } from 'react-redux';
import Pagination from './Pagination'

const ProductCard = lazy(()=>import('../ProductCard/ProductCard')) 
export default function Shop(props) {
  const [products, setProducts] = useState([]);

  const [pagination, setPagination] = useState({
    _curPage:1,
    _totalPages:0,
    _quantity: 10,
  })
  const result_search = useSelector(state => state.search);

  useEffect(() => {
    if(props.match.params.slug!=="search_result"){
    shopAPI.getPage(props.match.params.slug, pagination._curPage)
      .then(
        res=>{
          setProducts(res.products);
        }
      )
    }
  }, [pagination._curPage])
  useEffect(() => {
    
    if(props.match.params.slug!=="search_result"){ 
      shopAPI.get(props.match.params.slug)
      .then(res => {
        setPagination(pagination => ({...pagination, _totalPages: Math.ceil(res.products.length/pagination._quantity)}))
      })
      .catch(err => console.log(err))

      shopAPI.getPage(props.match.params.slug, pagination._curPage)
      .then(
        res=>{
          setProducts(res.products);
        }
      )
    }
    else{
      setProducts(result_search);
    }
  }, [])

  return (
    <section id="shop--news">
    <div className="banner">
      <h1>{props.match.params.slug.replace("_", " ")}</h1>
    </div>
    <main className="container--96">
      <div className="row">
         {
             products && products.map((product, index ) =>( 
             <Suspense fallback = {<Preloader />}>
               <ProductCard key={index} product={product} />
            </Suspense>)
             )
         }
      </div>
      <Pagination setPagination={setPagination} _totalPages = {pagination._totalPages} _curPage = {pagination._curPage}/>
    </main>
  </section>
    ) 
}