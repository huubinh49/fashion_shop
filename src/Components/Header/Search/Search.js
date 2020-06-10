import React, {
    Component
} from 'react'
import ListSearch from './ListSearch'
import { result } from '../../../Redux/Search/search_reducer'
import { connect } from 'react-redux'
export class Search extends Component {
    constructor(props){
        super(props)
        this.state= {
            data:[],
            result:[]
        }
    }
     componentDidMount = ()=>{
        let fetchData = async ()=>{
            const data_shop_accessories = await require(`./../../Shop/shop_accessories.json`);
            const data_shop_news = await require(`./../../Shop/shop_news.json`);
            const data_shop_womens = await require(`./../../Shop/shop_womens.json`);
            const data_shop_mens = await require(`./../../Shop/shop_mens.json`);
            const data_shop_packs = await require(`./../../Shop/shop_packs.json`);
            return [...data_shop_accessories, ...data_shop_mens, ...data_shop_news, ...data_shop_packs, data_shop_womens]
          }
          
          fetchData().then(
            (data_shop)=>{
              this.setState({
                  data:data_shop
              }); 
            }
            ) 
     }
    search = (query)=>{
        // console.log(this.state.data)
        // let res  = this.state.data.filter(item => {if(item["name"]) return item["name"].includes(query); else return false})
        let res= [];
        if(query !== "")
        this.state.data.forEach(item=> {if(item["name"]&&item["name"].toLowerCase().includes(query.toLowerCase()))res.push(item)})
        this.setState({result : res});
    }
    autoSearch = (event)=>{
        if(event.target){
            clearTimeout(this.search_debounce);
            let query = event.target.value
            this.search_debounce= setTimeout(()=>this.search(query),1000);
        }
    }
    render() {
        return ( 
            (this.props.isShow)? <div className = "search" >
                <div className = "close">
                    <i className="fa fa-times" aria-hidden="true" onClick ={()=>this.props.setShow()}></i>
                </div>
            <div className = "search_form" >
                    <input onChange={(event)=> this.autoSearch(event)} type = "text"  id = "search_input"aria-describedby = "helpId"placeholder = "Search for products" autoFocus/>
                    <a onClick={()=>this.props.send_result(this.state.result)} href="/shop/search_result" className = "search__submit" >
                        <i className = "fa fa-search" aria-hidden = "true" / >
                    </a> 
            </div>
            <ListSearch products = {this.state.result}/>
        </div>: <></>

        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    send_result : (products) => dispatch(result(products))
})

export default connect(null, mapDispatchToProps)(Search);
