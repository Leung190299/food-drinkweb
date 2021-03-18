import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import {  useHistory, useLocation } from 'react-router-dom';
import Datas from '../../Data/Firebase';
import Cookies from 'js-cookie';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

 const DeleteProduct=({id})=> {
    const history=useHistory();
    const location=useLocation();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const Delete = () => {
    console.log(id)
    Datas.database().ref(Cookies.get('add')).child('product').child(id).remove().then(()=>{
        const current =location.pathname;
        history.replace(`/reload`);
        setTimeout(() => {
      history.replace(current);
            });
       setOpen(false);
    }).catch((e)=>{
        alert(e);
    })
  };
  return (
    <div>
      <Button variant="outlined" color='secondary' onClick={handleClickOpen}>
        <DeleteRoundedIcon/>
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title"><h1>Xóa sản phẩm</h1></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Bạn muốn xóa sản phẩm này ?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
           Hủy
          </Button>
          <Button onClick={Delete} color="primary">
            Xóa 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default DeleteProduct;