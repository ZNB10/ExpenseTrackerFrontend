import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import { IoIosLogIn, IoIosHome, IoIosKey } from 'react-icons/io';

const NavItem = ({to, children, ...rest})=>{
    return(
        <Link to={to}>{children}</Link>
    );
};

export default ()=>{
    return (
        <nav>
            <NavItem to="/"><IoIosLogIn/>&nbsp;Login</NavItem>
            <NavItem to="/signin"><IoIosKey/>&nbsp;Signin</NavItem>
            <NavItem to="/main"><IoIosHome/>&nbsp;Main</NavItem>
        </nav>
    );
}