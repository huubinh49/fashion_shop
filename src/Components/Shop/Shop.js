import React, { Component } from 'react'
import ProductCard from '../ProductCard/ProductCard'

export default class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : []
        }
    }
    componentDidMount = () =>{
        var data = require(`./${this.props.match.params.slug}.json`)
        this.setState({products: data});
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
                 this.state.products.map((product, index )=> <ProductCard ID={index} shop={this.props.match.params.slug} product={product} />)
             }
          </div>
        </main>
      </section>
        ) 
    }
}
