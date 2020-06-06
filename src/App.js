import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom'
import MyRoute from './Route/MyRoute';


function App() {
  return (
    <Router>
      <div className="App">
          <Header></Header>
          <MyRoute />
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
