import React, {Component} from 'react';

//react router
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { setJWT, setLocalStorage, getLocalStorage, setUnAuthHandler, removeLocalStorage } from './Utilities';
import NavBar from './Components/Common/NavBar/NavBar';
import PrivateRoute from './PrivateRoute';

import Home from './Components/Pages/Public/Home/Home';
import Login from './Components/Pages/Public/Login/Login';
import Sigin from './Components/Pages/Public/Signin/Signing'
import Dashboard from './Components/Pages/Private/Dashboard/Dashboard'
import Backlog from './Components/Pages/Private/Backlog/Backlog';


class App extends Component {
  constructor(){
    super();
    this.state = {
      "auth":(JSON.parse(getLocalStorage('auth')) ||
      {
        logged: false,
        token: false,
        user: {}
      })
    }
    this.setAuth = this.setAuth.bind(this);
    this.setUnAuth = this.setUnAuth.bind(this);
    
    setJWT(this.state.auth.token);
    setUnAuthHandler(this.setUnAuth);
  }//contructor

  setUnAuth(error){
    this.setAuth(false,{});
  }

  setAuth(token, user){
    setJWT(token);
    let _auth = {
      logged: token && true,
      token:token,
      user:user
    };
    setLocalStorage('auth', JSON.stringify(_auth));
    this.setState({
      auth: _auth
    });
  }
  render(){
    console.log(this.state.auth);
    return (
      <Router>
        <section className="container">
          <Route path="/" exact render={ (props)=>(<Home {...props} auth={this.state.auth} setUnAuth={this.setUnAuth}/>) } />
          <Route path="/login" render={ (props)=>(<Login {...props} auth={this.state.auth} setAuth={this.setAuth}/>)} />
          <Route path="/signin" component={Sigin}/>
          <PrivateRoute path="/main" auth={this.state.auth} component={Dashboard}/>
          <PrivateRoute path="/backlog" auth={this.state.auth} component={Backlog}/>
          <NavBar auth={this.state.auth}/>
        </section>
      </Router>
    );
  }
}

export default App;
