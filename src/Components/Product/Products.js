import React from 'react'
import Datas from '../../Data/Firebase';
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteProduct from './DeleteProduct';
const Products = () => {
    const [products,setProducts]=React.useState([]);
    React.useEffect(()=>{
        const array=[];
        Datas.database().ref(Cookies.get('add')).child('product').on('child_added',snapshot=>{
            array.push(snapshot.val());
        });
        setProducts(array);
    },[])
    return (<>
       
        <div className="container-fluid"   >
        <div style={{color:'#fff',backgroundColor:'#33ec80ef',textAlign:'center',fontWeight:'bold',fontSize:25}}>Danh Sách Món Ăn</div>
            <div className='row'style={{marginTop:15}}  >
        {products.map((item)=>{
            return(
                <div className="card" style={{maxWidth: '18rem',marginLeft:20}}>
                  <div className="card-header" ><h2 style={{color:'#face2f',textAlign:'center',fontWeight:'bold'}}>{item.name}</h2></div>
                  <div className="card-body">
                     <img src={item.imageURL} className="img-thumbnail" />
                   
                  </div>
                  <div className="card-header" >  
                  <h2 style={{color:'#face2f'}}>{item.price}.Vnd</h2>
                  </div>
                  <div className='row' style={{display:'flex',justifyContent:'space-between',paddingInline:20}}>
                  <Link to={`/Product/Details/${item.id}`}  >
                  <Button variant="outlined" color='default'>
                  <VisibilityIcon style={{color:'#33ec80ef'}} />
                    </Button>
                  
                     </Link>
                  <DeleteProduct id={item.id}/>
                  
                  </div>
                </div>
                
            )
        })}
        
        </div>
        </div>
        </>
    )
}

export default Products
