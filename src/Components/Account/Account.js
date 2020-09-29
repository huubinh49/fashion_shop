import React, { useEffect, useState } from 'react'
import UserAPI from './../../API/userAPI'
import './Account.scss'
import * as authAction from '../../Redux/authenticate/auth_action';
export default function Account(props){
    const [userData, setUserData] = useState({
        'username': "",
        'email' : "",
        'bills' : [

        ]
    })
    useEffect(() => {
        UserAPI
        .get()
        .then(
            res => {
                console.log(res)
                setUserData(res)
            }
        )
        .catch(
            err => {
                console.log(err)
            }
        )
    }, [])
    return(
        
        <section className = "container account">
            <div className = "row content-wrapper">
                <div className = "col-md-4 col-sm-12 control_panel">
                    <ul>
                        <li><a href = "/account">MY ACCOUNT</a></li>
                        <li className = "active"><a href = "/account">Dashboard</a></li>
                        <li><a href = "/account">Addresses</a></li>
                        <li><a href = "/account/signin" onClick = {()=>authAction.authLogout()}>Sign Out</a></li>
                    </ul>
                </div>
                <div className = "col-md-8 col-sm-12 account_info">
                    <h3>Hi {userData.username}</h3>
                    <hr/>
                    <div className = "container-fluid orders account_info__comp">
                        <div className = "row title">Order History:</div>
                        <div className = "row order__bill">
                            <table className="col-sm-12 container-fluid table table-striped table-inverse">
                              <thead className="thead-inverse">
                                <tr className = "row">
                                  <th className = "col-sm-1">ID</th>
                                  <th className = "col-sm-3">Order Date</th>
                                  <th className = "col-sm-6">Products</th>
                                  <th className = "col-sm-2">Price</th>
                                </tr>
                              </thead>
                              <tbody>
                                  {userData.bills.length?
                                  
                                      userData.bills.map(bill=>(
                                        <tr className="row">
                                          <td  className = "col-sm-1">{bill.id}</td>
                                          <td  className = "col-sm-3">{bill.orderDate}</td>
                                          <td  className = "col-sm-6">
                                              <ul>
                                                {
                                                    bill.orders.map(
                                                        order=>(
                                                        <li>{order.product.name}</li>
                                                        )
                                                    )
                                                }
                                              </ul>
                                          </td>
                                            <td  className = "col-sm-2">{bill.orders.reduce((sum, cur)=>sum+cur.price*cur.quantity, 0)}</td>
                                        </tr>
                                      )):
                                      <tr className="row" role="alert"> 
                                        <td className="col-sm-12 alert alert-success">
                                            No order has been made yet!
                                        </td>
                                      </tr>
                                  }
                              </tbody>
                            </table>
                        </div>
                    </div>
                    <div className = "details account_info__comp container-fluid">
                        <div className = "row title">Detail Information:</div>
                        <div className = "row details__child">
                            <h4 className = "col-md-2">Name:</h4>
                                <p className = "col-md-10">{userData.username}</p>
                        </div>
                        <div className = "row details__child">
                            <h4 className = "col-md-2">Email:</h4>
                            <p className = "col-md-10">{userData.email}</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}