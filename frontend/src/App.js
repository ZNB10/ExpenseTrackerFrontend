import React, {Component} from 'react';

//react router
import {BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from './Components/Common/NavBar/NavBar';

import Home from './Components/Pages/Public/Home/Home';
import Login from './Components/Pages/Public/Login/Login';
import Sigin from './Components/Pages/Public/Signin/Signing'
import Dashboard from './Components/Pages/Private/Dashboard/Dashboard'


class App extends Component() {
  render(){
    return (
      <Router>
        <section className="container">
          <Route path="/" exact component={Login}></Route>
          <Route path="/signin" exact component={Sigin}></Route>
          <Route path="/main" exact component={Dashboard}></Route>
          <NavBar/>
        </section>
      </Router>
    );
  }
}

export default App;
