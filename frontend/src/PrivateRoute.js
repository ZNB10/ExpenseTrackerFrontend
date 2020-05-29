import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';

export default ({component:Component, auth, ...rest})=>{
    return(
        <Route
            {...rest}
            render={
                (props)=>{
                    //console.log(auth); ver autorizacion
                    return (auth.logged) ? ( <Component {...props} auth={auth} />) : (<Redirect to={{pathname:"/login", state:{from: props.location}}} />)
                }
            }
        />
    );
}