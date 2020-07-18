import React, { Component } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { connect } from 'react-redux';

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
        setTimeout(()=>this.props.doneLoading(),2000);
    }
    render() {
      return (this.props.isLoading)?  ( <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:"white"}}>
      <img src="/preloader.gif" alt="" />
    </div>): (
        <section id="shop--news">
        <div className="banner">
          <h1>{this.props.match.params.slug.replace("_", " ")}</h1>
        </div>
        <main className="container--96">
          <div className="row">
             {
                 this.state.products.map((product, index )=> <ProductCard product={product} />)
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