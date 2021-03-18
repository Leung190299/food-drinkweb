import React from "react";
import Cookies from 'js-cookie'
const AuthContext= React.createContext();

export const ProvideAuth=({children})=>{
    const [auth,setAuth]=React.useState(null);
    React.useEffect(()=>{
        const token=Cookies.get('add');
        if(token)setAuth(token);
    },[])
    return(
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;