const { default: axiosClient } = require("./axiosClient");

class ShopAPI{

    get = (name) =>{
        const url = `shop/${name}`;
        return axiosClient.get(url)
    }
    getPage = (name, page) =>{
        const url = `shop/${name}/${page}`;
        return axiosClient.get(url)
    }
}
const shopAPI = new ShopAPI()
export default shopAPI;