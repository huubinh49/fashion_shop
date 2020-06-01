import React, { Component } from 'react'
import SubMenu from './SubMenu'
import Toggle from './Toggle'
import ProductCard from '../ProductCard/ProductCard'

export default class SubMenuHuge extends Component {
    constructor(props) {
        super(props);
        this.state={
            product : {
                "swatches": [
                  {
                    "img": "//cdn.shopify.com/s/files/1/0277/0693/products/s20_pr_standardpack_black_2_49229206806_ocopy_1024x1024.jpg?v=1585149320",
                    "color": "//cdn.shopify.com/s/files/1/0277/0693/t/115/assets/black_20x20.png?v=2058593223305495546",
                    "color_name": "black"
                  },
                  {
                    "img": "//cdn.shopify.com/s/files/1/0277/0693/products/s20_pr_standardpack_olivenavy_2_49229204366_ocopy_1024x1024.jpg?v=1585149320",
                    "color": "//cdn.shopify.com/s/files/1/0277/0693/t/115/assets/olive-navy_20x20.png?v=10043498136048994580",
                    "color_name": "olive"
                  },
                  {
                    "img": "//cdn.shopify.com/s/files/1/0277/0693/products/s20_pr_standardpack_blueblack_2_49229433202_ocopy_1024x1024.jpg?v=1585149320",
                    "color": "//cdn.shopify.com/s/files/1/0277/0693/t/115/assets/blue-black_20x20.png?v=13250750035885891285",
                    "color_name": "blue"
                  },
                  {
                    "img": "//cdn.shopify.com/s/files/1/0277/0693/products/s20_pr_standardpack_silvercharcoal_5_49229203481_ocopy_1024x1024.jpg?v=1585149320",
                    "color": "//cdn.shopify.com/s/files/1/0277/0693/t/115/assets/silver-charcoal_20x20.png?v=2855590519051121765",
                    "color_name": "silver"
                  },
                  {
                    "img": "//cdn.shopify.com/s/files/1/0277/0693/products/s20_pr_standardpack_navyred_1_49229432552_ocopy_1024x1024.jpg?v=1585149320",
                    "color": "//cdn.shopify.com/s/files/1/0277/0693/t/115/assets/navy-red_20x20.png?v=5560284584146301598",
                    "color_name": "navy"
                  }
                ],
                "name": "Standard Pack",
                "price": "$99.00"
              }
        }
    }
    render() {
        return (
            <ul className="dropdown__menu--huge container-fluid">
                      <div className="menu--huge row">
                          {this.props.menuHuge.map((menu, index)=>{
                              return(
                                    <li key={index}>
                                        <Toggle url={menu.url} title={menu.title}></Toggle>
                                        <SubMenu menu ={menu.listMenu}></SubMenu>
                                        <div className="dropdown__footer">{menu.footer}</div>
                                    </li>)
                          })
                          }
                          <ProductCard shop="shop_news" inHeader={"haha"} product={this.state.product}/>
                      </div>
                      
            </ul>
        )
    }
}
