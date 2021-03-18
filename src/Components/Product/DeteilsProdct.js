import React from 'react'
import { Link, Redirect, useHistory, useParams ,useLocation} from 'react-router-dom'
import Datas from '../../Data/Firebase';
import Cookies from 'js-cookie'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const DeteilsProdct = () => {
    let {id}=useParams();
    const history=useHistory();
    const location=useLocation();
    const Product={
        id:'',
        name:'',
       image:'',
        imageURL:'',
        
        like:0,
        price:0,
        priceSeo:0
    }
    const [product,setProduct]=React.useState(Product);
    React.useEffect(()=>{
        const as=id;
        if(as){
            history.replace(location.pathname);
            Datas.database().ref(Cookies.get('add')).child('product').child(as).on('value',snapshot=>{
                setProduct({
                    ...product,
                    id:snapshot.val().id,
                    name:snapshot.val().name,
                    imageURL:snapshot.val().imageURL,
                    like:snapshot.val().like,
                    price:snapshot.val().price,
                    priceSeo:snapshot.val().priceSeo
                })
            })
        }
        
    },[location.pathname])
   
    return (
        <div classNameName="container-fluid">
            <div style={{color:'#fff',backgroundColor:'#33ec80ef',textAlign:'center',fontWeight:'bold',fontSize:25}}>Chi tiết sản phẩm</div>
        <div className='row' style={{marginTop:20}}>
            <div className='col-3'>
            <img src={product.imageURL} style={{height:300,width:300}} alt=""/>
            </div>
            <div className='col-9' style={{lineHeight:2}}>
                <div><h1 style={{color:'#93ec80ef',fontSize:40}}>{product.name}</h1></div>
                <div className='row'><ThumbUpIcon style={{color:'#93ec80ef',marginInline:15}}/><h2>{product.like}</h2></div>
                <div className='row' style={{marginTop:70}}>Giá :<h1 style={{color:'#93ec80ef',marginInline:15}} >{product.price}</h1>.đ</div>
                <div className='row'>Giá khuyến mại:<h1 style={{color:'#93ec80ef',marginInline:15}} >{product.priceSeo}</h1>.đ</div>
                <div></div>
                <div className='row' style={{width:300,display:'flex',justifyContent:"space-between"}}> 
                    <Link to={`/Product/Update/${product.id}`} className='btn btn-success' > sửa</Link>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default DeteilsProdct
