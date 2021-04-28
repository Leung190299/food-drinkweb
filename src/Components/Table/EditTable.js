import React from 'react'
import Datas from '../../Data/Firebase';
import Cookies from 'js-cookie'
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import { useHistory ,useLocation} from 'react-router-dom';

const EditTable = () => {
   const Table={
      
   }
   const So={
       so1:0,
       so2:0,
   }
 
    const location=useLocation();
   const history=useHistory();
   const [table,setTable]=React.useState(Table);
   const [so,setSo]=React.useState(So);
   const [tables,setTables]=React.useState([]);
   React.useEffect(()=>{
    const array=[];
    Datas.database().ref(Cookies.get('add')).child('table').on('child_added',(snapshot)=>{
        array.push(snapshot.val());
    })
    setTables(array)
   
},[])
  const themTable=()=>{
   
    Datas.database().ref(Cookies.get('add')).child('table').child(table.id).set(table).then(()=>{
        alert('Thêm Thành công');
        history.replace('/reload');
            setTimeout(() => {
                history.replace(location.pathname)
            },);
    }).catch((e)=>{
        alert(e);
    })   
   }
   const taoTable=(e)=>{
    e.preventDefault();
    for (let index = so.so1; index <= so.so2; index++) {
       
        Datas.database().ref(Cookies.get('add')).child('table').child(`ma${index}`).set({id:`ma${index}`,name:`bàn ${index}`,status:false});
        
    } 
  
}
function Edit(id,name){
    setTable({
        ...table,
        id:id,
        name:name,
    })
}
const updateTable=()=>{
    Datas.database().ref(Cookies.get('add')).child('table').child(table.id).update(table).then(()=>{
        alert('Cập nhật Thành công');
        history.goBack('/Table/edit')
    }).catch((e)=>{
        alert(e);
    })
}
    return (
        <div className="container-fluid">
            <div style={{color:'#fff',backgroundColor:'#33ec80ef',textAlign:'center',fontWeight:'bold',fontSize:25}}>Tạo bàn</div>
            <div className='row' style={{marginBottom:20,marginTop:20}}>
                <div className='col-6'>
                    <h2>Tạo bàn </h2>
                    <form  >
                    <div className="form-group">
                            <label htmlFor="usr">Mã bàn</label>
                            <input type="text" className="form-control"  value={table.id} onChange={(e)=>setTable({...table,id:e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="usr">Tên bàn</label>
                            <input type="text" className="form-control"  value={table.name} onChange={(e)=>setTable({...table,name:e.target.value})}/>
                        </div>
                        <div className='row' style={{display:'flex',justifyContent:'space-between',marginInline:1}} >
                        <button className="btn  col-3" onClick={()=>themTable()} type='button'><SaveTwoToneIcon/></button>
                        <button className='btn  col-3' onClick={()=>updateTable()} type='button' ><EditRoundedIcon/></button>
                            <button className='btn col-3' onClick={()=>alert('xóa')} ><DeleteRoundedIcon/></button>
                        </div>
                    </form>
                </div>
                <div className='col-6'>
                    <h2>Tạo bàn nhanh </h2>
                    <form onSubmit={taoTable} >
                        <div className="form-group">
                            <label htmlFor="usr">Từ:</label>
                            <input type="number" className="form-control"  value={so.so1} onChange={(e)=>setSo({...so,so1:e.target.value})}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Đến</label>
                            <input type="number" className="form-control"  value={so.so2} onChange={(e)=>setSo({...so,so2:e.target.value})} />
                        </div>
                        <button type="submit" className="btn btn-success">Tạo bàn</button>
                    </form>
                </div>
            </div>
            <div style={{color:'#fff',backgroundColor:'#33ec80ef',textAlign:'center',fontWeight:'bold',fontSize:25}}>Dành sách bàn</div>
            <div style={{ overflow:'scroll',height:500}}>

            <table className="table table-hover " >
                <thead className="table-success">
                    <tr>
                        <th>Tên bàn</th>
                        <th>Hiện trạng</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {tables.map((item)=>{
                        if(item.status)return(<tr onClick={()=>{alert('Không thể chọn')}} >
                            <td key={item.id}>{item.name}</td>
                        
                            <td>Có khách</td>
                            
                            </tr>)
                        return(
                            <tr onClick={()=>Edit(item.id,item.name)}>
                            <td key={item.id}>{item.name}</td>
                        
                            <td>Trống</td>
                            
                            </tr>
                            
                        )
                    })}
                    
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default EditTable
