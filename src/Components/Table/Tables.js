
import React from 'react'
import {Grid} from '@material-ui/core'
import Table from './Table'
import Datas from '../../Data/Firebase';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';

const Tables = () => {
    const [tables,setTables]=React.useState([]);
    React.useEffect(()=>{
        const array=[];
        Datas.database().ref(Cookies.get('add')).child('table').on('child_added',(snapshot)=>{
            array.push(snapshot.val());
        })
        setTables(array)
        
    },[])
    return (
        <div class="container-fluid">
            <div style={{color:'#fff',backgroundColor:'#33ec80ef',textAlign:'center',fontWeight:'bold',fontSize:25}}>Dành sách bàn</div>
            <div className='row'style={{marginBottom:20,marginTop:10}}>
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

export default Tables
