const { default: axiosClient } = require("./axiosClient");

class ProductAPI{
    get = (id) =>{
        const url = `product/${id}`;
        return axiosClient.get(url)
    }
    getByName = (name)=>{
        const url = `product/search?name=${name}`;
        return axiosClient.get(url);
    }
}

const productAPI = new ProductAPI();
export default productAPI