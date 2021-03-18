import React from 'react';
import QRCode from "react-qr-code";
import Cookies from 'js-cookie'
const ProfilePase = () => {
    return (
        <div className="menu-box">
        <div className="container-fluid" style={{marginTop:100}}>
         
           
          
          
          <div className="row inner-menu-box">
           
            <div className="col-12" style={{justifySelf:'center',alignSelf:'center',textAlign:'center'}}>
            <h1 style={{fontSize:30,fontWeight:'bold',color:'#00ff00'}}>MÃ QR</h1>
            <QRCode value={Cookies.get('add')} />
            </div>
          </div>
        </div>
      </div>
    
    )
}

export default ProfilePase;

