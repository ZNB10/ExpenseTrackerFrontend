import React from 'react';
import {Link} from 'react-router-dom';

const NavItem = ({to, children, ...rest})=>{
    return(
        <Link to={to}>{children}</Link>
    );
};

export default ()=>{
    return (
        <nav>
            <NavItem to="/">Login</NavItem>
            <NavItem to="/signin">Signin</NavItem>
            <NavItem to="/main">Main</NavItem>
        </nav>
    );
}