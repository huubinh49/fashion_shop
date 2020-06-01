import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            
              <section id="home" className="container--96">
                <div className="shop_sale">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0277/0693/files/trail-shorts-sport-2_600x@2x.progressive.jpg?v=1585610182"
                      alt="something"
                    />
                  </div>
                  <div className="content shop_sale_content">
                    <h2>25% off sitewide spring sale.</h2>
                    <strong>Use code Spring25 at checkout.</strong>
                    <Link to ="/shop/shop_news" className="btn-wrapper">
                      <div className="btn btn-danger">Shop sale</div>
                    </Link>
                  </div>
                </div>
                <div className="shop_lookbook">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0277/0693/files/49593839851_04de08660a_o_300x@2x.progressive.jpg?v=1585023215"
                      alt="something"
                    />
                  </div>
                  <div className="content shop_lookbook_content">
                    <h2>Fresh for spring.</h2>
                    <strong>New styles are in.</strong>
                    <div className="btn-wrapper">
                      <div className="btn btn-danger">Shop lookbook</div>
                    </div>
                  </div>
                </div>
                <div className="earn_rewards">
                  <div className="img-wrapper">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0277/0693/files/49488980266_87e85a8c02_o_copy_300x@2x.progressive.jpg?v=1585238842"
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
                      src="https://cdn.shopify.com/s/files/1/0277/0693/files/Website_Pack_BagsCollection_Block_Spring20Launch_031919_200x@2x.progressive.jpg?v=1584589900"
                      alt="something"
                    />
                  </div>
                  <div className="shops_content">
                    <h2>New packs &amp; bags</h2>
                    <div className="btn btn-danger">Shop bags</div>
                  </div>
                </div>
                <div className="shops shop_men">
                  <div className="img-wrapper img_shops">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0277/0693/files/Website_MensCollection_Block_Option2_Spring20Launch_031919_200x@2x.progressive.jpg?v=1584589978"
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
                      src="https://cdn.shopify.com/s/files/1/0277/0693/files/Website_WomensCollection_Block_Spring20Launch_031919_200x@2x.progressive.jpg?v=1584590023"
                      alt="something"
                    />
                  </div>
                  <div className="shops_content">
                    <h2>New women's apparel</h2>
                    <div className="btn btn-danger">Shop women's</div>
                  </div>
                </div>
                <div className="shop_rovers">
                  <div className="img-wrapper img_shops">
                    <img
                      src="https://cdn.shopify.com/s/files/1/0277/0693/files/ezgif.com-webp-to-jpg_300x@2x.progressive.jpg?v=1584719872"
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
                      src="https://cdn.shopify.com/s/files/1/0277/0693/files/JoeySchusler-1_copy_300x@2x.progressive.jpg?v=1585582028"
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
              </section>)
    }
}
