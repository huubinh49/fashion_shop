import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../Components/Home/Home'
import Shop from '../Components/Shop/Shop'
import ProductDetail from '../Components/ProductDetail/ProductDetail'
import LookBook from "../Components/Lookbook/LookBook"
export default class MyRoute extends Component {
    render() {
        return (
            <Switch>
                <Route path = "/" exact children = {<Home />} />
                <Route path = "/shop/:slug" component = {Shop} />
                {/* <Route path ="/detail/:slug\_:color" exact component ={ProductDetail} /> */}
                <Route path = "/product/:shop/:name/:id" component={ProductDetail} />
                <Route path = "/lookbook" component = {LookBook} />
            </Switch>
        )
    }
}
