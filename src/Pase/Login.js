import React from 'react'
import {TextField} from '@material-ui/core';
import AuthContext from '../Context/AuthContext'
import Datas from '../Data/Firebase';
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom';
import Dangki from './Dangki';
const Login = () => {
    const accont={
        Username:'',
        Password:'',
      }
      
      var [acc,setAcc]=React.useState(accont);
      const {auth,setAuth}=React.useContext(AuthContext);
   
      
      const Dangnhap=(e)=>{ 
          e.preventDefault()
        Datas.auth().signInWithEmailAndPassword(acc.Username,acc.Password)
          .then(()=>{
            const Emailcut=acc.Username.slice(0,acc.Username.indexOf('@'));
            
            Cookies.set('add',Emailcut)
            setAuth(Emailcut)
            
          }).catch((error)=>{
            alert(error)
            
          });
         
      }
      
      if(auth)return <Redirect to='/'/>
    return (
        <div className="reservation-box">
        <div className="container">
          <div className="row" style={{marginTop:200}}>
            <div className="col-lg-12">
           
              <div className="heading-title text-center">
                
                 
                <h2 style={{fontSize:45,color:'lightgreen'}}>LOGIN</h2>
                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="contact-block">
                <form id="contactForm" onSubmit={Dangnhap}>
                  <div className="row ">
                   <div className="col-md-4"/>
                    <div className="col-md-4" >
                        <TextField margin="normal" fullWidth label="Tên Đăng Nhập" focused className='form-control ' value={acc.Username} onChange={(e)=>{setAcc({...acc,Username:e.target.value})}} color='primary'/>
                        <TextField className='form-control' margin="normal"
                          fullWidth 
                          value={acc.Password} 
                          onChange={(e)=>{setAcc({...acc,Password:e.target.value})}}
                          label='Mật khẩu'
                         type="password"
                         autoComplete="current-password"/>
                           <div style={{marginLeft:140,marginTop:30,marginBottom:50}} ><Dangki/></div>
                   </div>
                   
                    <div className="col-md-12">
                      <div className="submit-button text-center">
                        <button className="btn btn-common" id="submit" type="submit">Đăng Nhập</button>
                        <div id="msgSubmit" className="h3 text-center hidden" /> 
                        
                       
                      </div>
                    
                    </div>
                  </div>            
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Login;