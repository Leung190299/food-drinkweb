import React from 'react'
import { Card, CardContent, CardMedia, IconButton, Typography ,Grid} from '@material-ui/core'
import uesStyles from './styles'
import VisibilityIcon from '@material-ui/icons/Visibility';
import Datas from '../../Data/Firebase';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
const Bills=()=> {
    const [tables,setTables]=React.useState([]);
    React.useEffect(()=>{
     setTimeout(()=>{
        const array=[];
        Datas.database().ref(Cookies.get('add')).child('table').on('child_added',(snapshot)=>{
            array.push(snapshot.val());
        })
        setTables(array)
     },1000)
        
    },[])
    return (
        <div class="container-fluid">
        <div style={{color:'#fff',backgroundColor:'#33ec80ef',textAlign:'center',fontWeight:'bold',fontSize:25}}>Dành sách bàn</div>
        <div className='row' style={{marginBottom:20,marginTop:10}}>
        {tables.map((item,index)=>{
                return(
                   
                    <Grid item key={index} xs={8} sm={6} md={4} lg={2} style={{marginLeft:20}}>
                         <Link to={`/Bill/${item.id}`}>
                        <Table table={item}/>
                        </Link>
                    </Grid>
                   
                )
            })}
            </div>
    </div>
    )
}
const Table = ({table}) => {
    const classes=uesStyles();
    if(table.status)return(
        <Card className={classes.root1}>
        <CardMedia className={classes.media} image='images/tableIcon.png' />
        <CardContent>
            <div className={classes.cardContent}>
                <Typography variant='h5' gutterBottom>
                    {table.name}
                </Typography>
               
            <IconButton color='inherit'>
                <VisibilityIcon />
            </IconButton>
        
            </div>
        </CardContent>
       
    </Card>

    )
    return (

        <Card className={classes.root2}>
            <CardMedia className={classes.media}  image='images/tableIcon.png'/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                        {table.name}
                    </Typography>
                    <IconButton color='inherit'>
                <VisibilityIcon/>
                </IconButton>
                </div>
            </CardContent>
           
       
        </Card>
    )
}
export default Bills
