const { default: axiosClient } = require("./axiosClient")

class userAPI{
    url = 'user'
    get = () => {
        const access = localStorage.getItem('token', "");
        return axiosClient.get(this.url,{
            params: {
                'access' : access
            }
        })
    }
}
const UserAPI = new userAPI();
export default UserAPI