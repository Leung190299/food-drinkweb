import React from 'react';
import Datas from '../../Data/Firebase';
import Cookies from 'js-cookie'
import {useForm} from 'react-hook-form'
import { useHistory, useLocation } from 'react-router-dom';
const EditProduct = () => {
    const Product={
        id:'',
        name:'',
        image:'',
        imageURL:'',
        categori:'',
        like:0,
        price:0,
        priceSeo:0
    }
  
    
    const history=useHistory();
    const location=useLocation();
    const [product,setProduct]=React.useState(Product);
    const [show,setShow]=React.useState(null);
    const {register,handleSubmit}= useForm();
    const [loai,setLoai]=React.useState([]);
    
    React.useEffect(()=>{
        const current =location.pathname;  
        history.replace(current);
        const array=[];
        Datas.database().ref(Cookies.get('add')).child('category').on('child_added',snapshot=>{
            array.push(snapshot.val());
        })
        setLoai(array);
      
    },[])
    
    const handleChange=async(e)=>{
       let file= e.target.files[0];
        if(file!=null){    
        
                const render= new FileReader();
                render.addEventListener('load',function(){
                   setShow(this.result)
                });
                render.readAsDataURL(file)       
        }   
    }
    const addProduct=async(data)=>{
      try {
        const storageRef=Datas.storage().ref(Cookies.get('add'));
        const fileRef=storageRef.child(data.image[0].name);
    
     await  fileRef.put(data.image[0]).then(async()=>{
        setProduct({...product,image:data.image[0].name,imageURL:await fileRef.getDownloadURL()});

        Datas.database().ref(Cookies.get('add')).child('product').child(product.id).set(product)
        .then(()=>{
            alert('Thêm thành công')
        }).catch((e)=>{
            alert(e);
        })
     })
       console.log(product)
      } catch (error) {
          alert('v nhập đây đủ thông tin')
      }
    }
    return (
        <form onSubmit={handleSubmit(addProduct)} enctype='multipart/form-data'>
            <div style={{ color: '#fff', backgroundColor: '#33ec80ef', textAlign: 'center', fontWeight: 'bold', fontSize: 25 }}>Thêm Sản phẩm</div>
            <div className='row' >
                <div className="col-9 ">
                    <div className='row'>
                        <div className='col-6'>
                        <div className="form-group">
                            <label >Mã sản phẩm</label>
                            <input type="text" name="email" className="form-control" placeholder="Mã sản phảm" value={product.id} onChange={(e)=>setProduct({...product,id:e.target.value})} />
                            <small id="emailHelp" className="form-text text-muted">
                                Nhập môt mã  theo sản của cửa hàng
                             </small>
                        </div>
                        <div className="form-group">
                            <label >Tên Sản phẩm</label>
                            <input type="text" className="form-control" placeholder="Tên sản phẩm" value={product.name} onChange={(e)=>setProduct({...product,name:e.target.value})} />

                        </div>
                        <div className="form-group">
                            <label >Giá sản phẩm</label>
                            <input type='number' className="form-control" placeholder="Giá sản phẩm" value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})} />
                        </div>
                        </div>
                        <div className='col-6'>
                        <div className="form-group">
                            <label >Giá khuyến mại</label>
                            <input type='number' className="form-control" placeholder="Giá khuyến mãi" value={product.priceSeo} onChange={(e)=>setProduct({...product,priceSeo:e.target.value})} />
                        </div>
                        <label >Loại sản phẩm</label>
                            <select className="form-control" aria-label="Default select example" onChange={(e)=>setProduct({...product,categori:e.target.value})}>
                                {loai.map((item)=>{
                                    return(
                                        <option key={item.id} defaultValue value={item.name}>{item.name}</option>
                                    )
                                    
                                })}
                                
                            </select>
                        
                            <button type="submit" className="btn btn-primary float-right " style={{marginTop:170}}>
                        Thêm sản phẩm
                     </button>
                       
                        </div>
                    </div>
                  

                </div>
                <div className='col-3' style={{ alignSelf: 'center' }}>

                    <div className="text-center" style={{ borderRadius: 5, borderStyle: 'solid', borderColor: '#33ec80ef' }}>
                        <img src={show} className="img-thumbnail "/>
                    </div>

                        
                        <input type="file" ref={register} required onChange={handleChange} name='image' accept='image/*'   />
                       
                    

                </div>
            </div>
        </form>
    )
}

export default EditProduct
