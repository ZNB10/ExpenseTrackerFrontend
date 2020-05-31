import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { IoIosArrowDroprightCircle, IoIosHome, IoMdPaperPlane, IoIosList, IoMdAddCircle, IoMdNotifications } from 'react-icons/io';

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
              <NavItem to="/login"><IoIosArrowDroprightCircle size="1.5em"/>&nbsp;Log In</NavItem>
              <NavItem to="/signin"><IoMdPaperPlane size="1.5em"/>&nbsp;Sign In</NavItem>
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