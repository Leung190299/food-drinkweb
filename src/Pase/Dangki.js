import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Datas from '../Data/Firebase';
import { Typography } from '@material-ui/core';

export default function FormDialog() {
    const accont={
        Username:'',
        Password:'',
        Password2:'',
        name:'',
      }
    var [acc,setAcc]=React.useState(accont);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  
 
  

  
  const Dangki=(e)=>{ 
      e.preventDefault()
      if(acc.Password===acc.Password2){
        Datas.auth().createUserWithEmailAndPassword(acc.Username, acc.Password)
        .then(() => {
          
          const Emailcut=acc.Username.slice(0,acc.Username.indexOf('@'));
          Datas.database().ref(Emailcut).set({name:acc.name});
          
          alert('Đăng kí thành công');
          setOpen(false);
         
          // ...
        })
        .catch((error) => {
         alert(error)
          // ..
        });
      }else{
          alert('mật khâu không đúng')
      }
     
     
  }
  return (
    <div>
      <Button variant="text" style={{color:'lightseagreen'}}  onClick={handleClickOpen}>
        Bạn chưa có tài khoản?
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        
        <DialogContent>
          <Typography variant='h4'>
            ĐĂNG KÝ 
          </Typography>
          <TextField
            autoFocus
            margin='dense'
            color='#fff'
            label="Email Address"
            type="email"
            value={acc.Username} onChange={(e)=>{setAcc({...acc,Username:e.target.value})}} 
            fullWidth
          />
          <TextField
            
            margin="dense"
           
            label="Mật khẩu"
            value={acc.Password} onChange={(e)=>{setAcc({...acc,Password:e.target.value})}} 
            type='password'
            fullWidth
          />
          <TextField
            
            margin="dense"
            id="name"
            label="Mật khẩu"
            value={acc.Password2} onChange={(e)=>{setAcc({...acc,Password2:e.target.value})}} 
            type="password"
            fullWidth
          />
           <TextField
            
            margin="dense"
            
            label="Tên quán đăng ký"
            value={acc.name} onChange={(e)=>{setAcc({...acc,name:e.target.value})}} 
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy
          </Button>
          <Button onClick={Dangki} color="primary">
            Dăng ký
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
