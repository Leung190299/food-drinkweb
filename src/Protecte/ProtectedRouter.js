import React from 'react'
import { Redirect, Route } from 'react-router-dom';

import AuthContext from '../Context/AuthContext'
const ProtectedRouter = ({children,path}) => {
    const {auth}=React.useContext(AuthContext);
    if(!auth) return<Redirect to='/Login'/>
    return (
        <Route path={path} >{children}</Route>
    )
}

export default ProtectedRouter
