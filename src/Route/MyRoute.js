import React, { lazy } from 'react'
import { Redirect, Route, Switch} from 'react-router-dom';
import LoadingComponent from '../Components/HOC/Loading';
import Form from '../Components/FormAuth/Form';
import Checkout from '../Components/Checkout/Checkout';
import Account from '../Components/Account/Account';
const Home = lazy(()=>import ('../Components/Home/Home'))
const Shop = lazy(()=>import ('../Components/Shop/Shop'))
const ProductDetail = lazy(()=>import ('../Components/ProductDetail/ProductDetail'))
const LookBook = lazy(()=>import ('../Components/Lookbook/LookBook'))


export default function MyRoute (props){
        return (
            <Switch>
                <Route path = "/" exact component = {LoadingComponent(Home)} />
                <Route path = "/shop/:slug" exact component = {LoadingComponent(Shop)} />
                <Route path = "/product/:shop/:name/:id" exact component={LoadingComponent(ProductDetail)}/>
                <Route path = "/lookbook" component = {LoadingComponent(LookBook)}/>
                <Route path = "/account" exact
                    children={({ match, location }) => (
                        (props.isAuthenticated)?  <Account match = {match}></Account>: <Redirect
                        to={{
                          pathname: "/account/signin",
                          state: { from: location }
                        }}
                      />
                    )}
                ></Route>
                <Route path = "/account/:mode" 
                    children={({ match, location }) => (
                        (props.isAuthenticated)?   <Redirect
                        to={{
                          pathname: "/account",
                          state: { from: location }
                        }}
                      /> : <Form match = {match}></Form>
                    )}
                >
                </Route>
                <Route path = "/checkout" component = {Checkout} />
               
            </Switch>
        )
}
