import { Button } from '@material-ui/core'
import React from 'react'
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import Datas from '../../Data/Firebase';
import Cookies from 'js-cookie'
import { useHistory, useLocation } from 'react-router-dom';
const Categrory = () => {
    const history=useHistory();
    const location=useLocation();
    const Categorys={
        id:'',
        name:''
    }
    const [category,setCategory]=React.useState(Categorys);
    const [categorys,setCategorys]=React.useState([]);
    React.useEffect(()=>{
        const path=location.pathname;
        history.replace(path);
        const array=[];
        Datas.database().ref(Cookies.get('add')).child('category').on('child_added',snapshot=>{
                array.push(snapshot.val());
        })
        setCategorys(array);
    },[]);
 const  ThemLoai=()=>{
        Datas.database().ref(Cookies.get('add')).child('category').child(category.id).set(category).then(()=>{
            alert('thêm thành công');
            history.replace('/reload');
            setTimeout(() => {
                history.replace(location.pathname)
            },);
        })
    }
    function Edit(id,name) {
        setCategory({
            ...category,
            id:id,
            name:name
        })
    }
    const  SuaLoai=()=>{
        Datas.database().ref(Cookies.get('add')).child('category').child(category.id).update(category).then(()=>{
            alert('sửa thành công');
            history.replace('/reload');
            setTimeout(() => {
                history.replace(location.pathname)
            },);
        })
    }
    const  XoaLoai=()=>{
        Datas.database().ref(Cookies.get('add')).child('category').child(category.id).remove().then(()=>{
            alert('Xóa thành công');
            history.replace('/reload');
            setTimeout(() => {
                history.replace(location.pathname)
            },);
        })
    }
    return (
        <div className="container-fluid">
            <div style={{ color: '#fff', backgroundColor: '#33ec80ef', textAlign: 'center', fontWeight: 'bold', fontSize: 25 }}>Tạo bàn</div>
            <div className='row' style={{ marginBottom: 20, marginTop: 20 }}>
                <div className='col-6'>
                    <h2>Tạo thể loại sản phẩm </h2>
                    <form  >
                    <div className="form-group">
                            <label htmlFor="usr">Mã loại </label>
                            <input type="text" className="form-control" id="usr" value={category.id} onChange={(e)=>setCategory({...category,id:e.target.value})} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="usr">Tên loại </label>
                            <input type="text" className="form-control" id="usr" value={category.name} onChange={(e)=>setCategory({...category,name:e.target.value})} />
                        </div>
                        <div className='row' style={{ display: 'flex', justifyContent: 'space-between', marginInline: 1 }} >
                            <button className="btn  col-3" type='button' onClick={ThemLoai}><SaveTwoToneIcon /></button>
                            <button className='btn  col-3' type='button' onClick={SuaLoai} ><EditRoundedIcon /></button>
                            <button className='btn col-3' type='button' onClick={XoaLoai}  ><DeleteRoundedIcon /></button>
                        </div>
                    </form>
                </div>
                <div className='col-6'>
                    <div style={{ overflow: 'scroll', height: 500 }}>

                        <table className="table table-hover " >
                            <thead className="table-success">
                                <tr>
                                    <th>Tên</th>
                                   

                                </tr>
                            </thead>
                            <tbody>
                                {categorys.map((item) => {   
                                    return (
                                        <tr onClick={() => Edit(item.id, item.name)}>
                                            <td key={item.id}>{item.name}</td>
                                            </tr>

                                    )
                                })}

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
           

        </div>
    )
}

export default Categrory
