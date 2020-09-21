import React, { useEffect } from 'react';
import './App.scss';
import HeaderTmp from './Components/Header/HeaderTmp';
import Footer from './Components/Footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom'
import MyRoute from './Route/MyRoute';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import * as authActions from './Redux/authenticate/auth_action'

function App() {
  const reduxProps = useSelector(state=>({
    isAuthenticated: (state.user.token!=null)? true:false
  }), shallowEqual);
  const dispatch = useDispatch()
  useEffect(() => { 
      tryAutoSignIn();
  })

  const tryAutoSignIn=  ()=>{
    dispatch(authActions.checkAuthentication())
  }

  return (
    <Router>
      <div className="App">
          <HeaderTmp {...reduxProps} />
          <MyRoute {...reduxProps}/>
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
