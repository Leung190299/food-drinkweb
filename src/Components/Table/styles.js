import { makeStyles } from '@material-ui/core';
export default makeStyles(()=>({
    root1:{
        maxWidth:'100%',
        backgroundColor:'#93ec80ef',
        
        '&:hover':{
            backgroundColor:"#33ec80af"
        }
    },
    root2:{
        maxWidth:'100%',
        backgroundColor:'#fff',
        
        '&:hover':{
            backgroundColor:"#33ec80af"
        }
    },
    media:{
        height:0,
        paddingTop:'100%',

    },
    CardActions:{
        display:'flex',
    
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between'
    }
}))