import React, { Component, Suspense,lazy } from 'react'

import { connect } from 'react-redux';
import Preloader from '../LoaddingScreen';

const ProductCard = lazy(()=>import('../ProductCard/ProductCard')) 
export class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : []
        }
    }
    componentDidMount = () =>{
      
      if(this.props.match.params.slug!=="search_result"){  
        var data = require(`./${this.props.match.params.slug}.json`)
        this.setState({products: data});
      }
      else{
        this.setState({products: this.props.products});
      }
    }

    render() {
      return (
        <section id="shop--news">
        <div className="banner">
          <h1>{this.props.match.params.slug.replace("_", " ")}</h1>
        </div>
        <main className="container--96">
          <div className="row">
             {
                 this.state.products.map((product, index )=> 
                 <Suspense fallback = {<Preloader />}>
                   <ProductCard product={product} />
                </Suspense>
                 )
             }
          </div>
        </main>
      </section>
        ) 
    }
}
const mapStateToProps = (state) => ({
  products : state.search
})



export default connect(mapStateToProps, null)(Shop)