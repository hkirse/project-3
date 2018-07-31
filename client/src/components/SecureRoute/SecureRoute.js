import React from 'react';
import { Route } from 'react-router';
import { checkIfAuthenticated} from '../../libs/authenticate';
import Login from '../../pages/Login'


export default ({ component: Component, ...rest }) => (
   <Route {...rest} render={props=>{
       if((checkIfAuthenticated())){
            return <Component {...props} />           
       } else {
           return <Login open={true} {...props}/>
       }
   }}
   />
)