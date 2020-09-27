import queryString from 'query-string'
const { default: axiosClient } = require("./axiosClient");

class billAPI{

    url = 'bill'
    access_token = localStorage.getItem('token', "");
    cart = localStorage.getItem('cart',[]);
    get = ()=>{
        return axiosClient.get(this.url, {
            params: {
                'access_token': this.access_token
            },
            headers:{
                'Authorization': `JWT ${this.access_token}`
            }
        })
    }
    post = (form)=>{
        localStorage.removeItem('cart');
        return axiosClient.post(this.url,{
            access_token: this.access_token,
            address: form.getAll('address')[0],
            products: this.cart,
        }, {
            headers: {
              'Authorization': `JWT ${this.access_token}`
            },
          })
    }
}

const BillAPI = new billAPI();
export default BillAPI