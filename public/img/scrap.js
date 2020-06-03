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
    for(let i = 0; i<products.length;i++){
        let curProduct = {};
        products[i].children.forEach((item, index) => {
            if(item.attribs){
                switch(item.attribs.class){
                    case "swatches-on-grid":
                        let swatches = [];
                        item.children.forEach(swatch =>{
                            let curSwatch = {};
                            //swatch.attribs["data-src"] // img clothes
                            curSwatch.img = swatch.attribs["data-src"].replace(/50x50/,"1024x1024");
                            curSwatch.color = swatch.attribs.style.match(/\((.*?)\)/g)[0].slice(1, -1);
                            
                            // curSwatch.color_name = swatch.attribs.class.match(/^bg_color_\w*$/g)[0]
                            curSwatch.color_name = swatch.attribs.class.match(/bg_color_[a-z]+/g)[0].replace("bg_color_","");
                            swatches.push(curSwatch);
                        })
                        curProduct.swatches = swatches;
                        break;
                    case "product-title":
                        item.children.forEach(my_a =>{
                           curProduct.name =  my_a.children[0].data;
                        })
                        break;
                    case "price":
                        
                        if(item.children[0].data)
                        curProduct.price = item.children[0].data.match(/./g).join("");
                        else{
                            curProduct.price =item.children.find(item => item["name"]=="ins").children[0].data.match(/./g).join("");
                         
                        }
                        break;
                    default:
                        break;
                }
            }
        })
        productsData.push(curProduct);
    }
    console.log("is-success")
    fs.writeFile("shop.json",JSON.stringify(productsData, null, 2),"utf8",function(){})
})
.catch(err=> console.log(err));