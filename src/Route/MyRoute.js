import React, { Component, lazy } from 'react'
import { Route, Switch} from 'react-router-dom';
import LoadingComponent from '../Components/HOC/Loading';
const Home = lazy(()=>import ('../Components/Home/Home'))
const Shop = lazy(()=>import ('../Components/Shop/Shop'))
const ProductDetail = lazy(()=>import ('../Components/ProductDetail/ProductDetail'))
const LookBook = lazy(()=>import ('../Components/Lookbook/LookBook'))

export default class MyRoute extends Component {
    render() {
        return (
            <Switch>
                <Route path = "/" exact component = {LoadingComponent(Home)} />
                <Route path = "/shop/:slug" exact component = {LoadingComponent(Shop)} />
                <Route path = "/product/:shop/:name/:id" exact component={LoadingComponent(ProductDetail)}/>
                <Route path = "/lookbook" component = {LoadingComponent(LookBook)}/>
            </Switch>
        )
    }
}
