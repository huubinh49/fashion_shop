import React, { Component } from 'react'

export default class Home extends Component {
  componentDidMount=()=>{
    setTimeout(()=>this.props.doneLoading(), 3000);
  }
    render=() => (
           <section id="home" className="container--96">
            {
              this.props.isLoading && <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:"white", position:"fixed", top:"0", left:"0", zIndex:"9999999"}}>
              <img src="/preloader.gif" alt="preloader" />
              </div>
            }
                <div className="shop_sale">
                  <div className="img-wrapper">
                    <img
                      src="/img/img_home/shop_sales.jpg"
                      alt="something"
                    />
                  </div>
                  <div className="content shop_sale_content">
                    <h2>25% off sitewide spring sale.</h2>
                    <strong>Use code Spring25 at checkout.</strong>
                    <a href ="/shop/shop_news" className="btn-wrapper">
                      <div className="btn btn-danger">Shop sale</div>
                    </a>
                  </div>
                </div>
                <div className="shop_lookbook">
                  <div className="img-wrapper">
                    <img
                      src="/img/img_home/shop_lookbook.jpg"
                      alt="something"
                    />
                  </div>
                  <div className="content shop_lookbook_content">
                    <h2>Fresh for spring.</h2>
                    <strong>New styles are in.</strong>
                    <a href="/lookbook" className="btn-wrapper">
                      <div className="btn btn-danger">Shop lookbook</div>
                    </a>
                  </div>
                </div>
                <div className="earn_rewards">
                  <div className="img-wrapper">
                    <img
                      src="/img/img_home/earn_rewards.jpg"
                      alt="something"
                    />
                  </div>
                  <div className="content earn_rewards_content">
                    <h2>Sign up. Earn points. get rewarded.</h2>
                    <strong>Topo Designs Rewards are here. </strong>
                    <div className="btn-wrapper">
                      <div className="btn btn-danger">Earn rewards</div>
                    </div>
                  </div>
                </div>
                <div className="shops shop_bags">
                  <div className="img-wrapper img_shops">
                    <img
                      src="/img/img_home/shop_bags.jpg"
                      alt="something"
                    />
                  </div>
                  <div className="shops_content">
                    <h2>New packs &amp; bags</h2>
                    <a href="/shop/shop_packs" className="btn btn-danger">Shop bags</a>
                  </div>
                </div>
                <div className="shops shop_men">
                  <div className="img-wrapper img_shops">
                    <img
                      src="/img/img_home/shop_mens.jpg"
                      alt="something"
                    />
                  </div>
                  <div className="shops_content">
                    <h2>New men's apparel</h2>
                    <a href="/shop/shop_mens" className="btn btn-danger">Shop men's</a>
                  </div>
                </div>
                <div className="shops shop_women">
                  <div className="img-wrapper img_shops">
                    <img
                      src="/img/img_home/shop_womens.jpg"
                      alt="something"
                    />
                  </div>
                  <div className="shops_content">
                    <h2>New women's apparel</h2>
                    <a href = "shop/shop_womens" className="btn btn-danger">Shop women's</a>
                  </div>
                </div>
                <div className="shop_rovers">
                  <div className="img-wrapper img_shops">
                    <img
                      src="/img/img_home/shop_packs.jpg"
                      alt="something"
                    />
                  </div>
                  <div className="content shop_rovers_content">
                    <h2>iconic design runs in the family.</h2>
                    <strong>Introducing the Rover Pack Collection</strong>
                    <div className="btn-wrapper">
                      <div className="btn btn-danger">shop rovers</div>
                    </div>
                  </div>
                </div>
                <div className="read_more">
                  <div className="img-wrapper img_shops">
                    <img
                      src="/img/img_home/read_mores.jpg"
                      alt="something"
                    />
                  </div>
                  <div className="content read_more_content">
                    <h2>along for the ride: wild traverse</h2>
                    <strong>
                      Charting new territories with our friends at Kokopelli Packraft.
                    </strong>
                    <div className="btn-wrapper">
                      <div className="btn btn-danger">read more</div>
                    </div>
                  </div>
                </div>
              </section>
            
    )
}
