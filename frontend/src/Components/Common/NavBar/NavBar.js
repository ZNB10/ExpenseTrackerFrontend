import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { IoIosLogIn, IoIosHome, IoIosKey, IoIosList, IoMdAddCircle, IoMdNotifications } from 'react-icons/io';

const NavItem = ({to, children, ...rest})=>{
    return(
        <Link to={to}>{children}</Link>
    );
};

export default ({auth, unSetAuth})=>{
    console.log(auth);
    if(!auth.logged){
        return(
            <nav>
              <NavItem to="/login"><IoIosLogIn/>&nbsp;Login</NavItem>
              <NavItem to="/signin"><IoIosKey/>&nbsp;SignIn</NavItem>
            </nav>
          )
    }else{
        return (
            <nav>
                <NavItem to="/"><IoIosHome size="2em"/></NavItem>
                <NavItem to="/main"><IoMdAddCircle size="2em"/></NavItem>
                <NavItem to="/backlog"><IoIosList size="2em"/></NavItem>
                <NavItem to="/notification"><IoMdNotifications size="2em"/></NavItem>
            </nav>
        );
    }
}