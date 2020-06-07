import React, { Component } from 'react'
import { Route, Switch} from 'react-router-dom'
import Home from '../Components/Home/Home'
import Shop from '../Components/Shop/Shop'
import ProductDetail from '../Components/ProductDetail/ProductDetail'
import LookBook from "../Components/Lookbook/LookBook"
import LoadingComponent from '../Components/HOC/Loadding'
export default class MyRoute extends Component {
    render() {
        return (
            <Switch>
                <Route path = "/" exact component = {LoadingComponent(Home)} />
                <Route path = "/shop/:slug" exact component = {LoadingComponent(Shop)} />
                <Route path = "/product/:shop/:name/:id" exact component={LoadingComponent(ProductDetail)} />
                <Route path = "/lookbook" component = {LoadingComponent(LookBook)} />
            </Switch>
        )
    }
}
