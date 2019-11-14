import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Privateroute = ({ component:Component, ...rest }) => (
    <Route
        {...rest}
        render={props => (
            localStorage.getItem("currentuser") ?
                <Component {...props} /> : 
                <Redirect to={{pathname:"/Login", state:{from :props.location}}}/>
        )}
    />
);


export default Privateroute;