const fs = require("fs")
const axios = require("axios");
const cheerio = require("cheerio");

const productsData = [];
//div.product-grid-item 
                        //div.swatches-on-grid // span.jas_swatch_on_img(data-src="url" style="background-size: cover;background-image: url(//cdn.shopify.com/s/files/1/0277/0693/t/108/assets/black_25x20.png?v=2058593223305495546)")
                        //span.product-title // a
                        //span.price // maybe <ins></ins>

const getUrl = new RegExp("\((.*?)\)", "g");
axios.get("https://topodesigns.com/collections/accessories")
.then(res=>{
    const $ = cheerio.load(res.data);
    let products = $("div.product-grid-item");
    for(let i = 0; i<products.length&&i<3;i++){
        let curProduct = {};
        products[i].children.forEach((item, index) => {
            if(item.children)
            console.log(item.children[0])
        })
    }
})
.catch(err=> console.log(err));