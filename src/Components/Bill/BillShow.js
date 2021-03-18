import Cookies from 'js-cookie';
import React from 'react'
import { useHistory, useParams } from 'react-router';
import Datas from '../../Data/Firebase';

const BillShow = () => {
    const [oder,setOder]=React.useState([]);
    const {id}=useParams();
    const histoty=useHistory();
    React.useEffect(() => {
       const array=[];
       Datas.database().ref(Cookies.get('add')).child('table').child(id).child('oder').on('child_added',snapshot=>{
           array.push(snapshot.val());
       })
       setOder(array);
       console.log(oder)
    },[])
    function Totall() {
      let s =0;
      oder.forEach(element => {
        s=s+Number(element.count*element.price);
      });
      return s;
    }
    function Thanhtoan() {
      Datas.database().ref(Cookies.get('add')).child('table').child(id).child('oder').remove().then(()=>{
        Datas.database().ref(Cookies.get('add')).child('table').child(id).update({status:false})
        alert('thanh toán thành công');
        histoty.push('/Bill');
      }).catch((e)=>{
        alert(e);
      })
    
    }
    return (
        <div class="container-fluid">
        <div style={{color:'#fff',backgroundColor:'#33ec80ef',textAlign:'center',fontWeight:'bold',fontSize:25}}>Hóa đơn</div>
       <div className="table-responsive">
       <table className="table table-hover">
         <thead>
           <tr>
             <th scope="col">STT</th>
             <th scope="col">Tên Món</th>
             <th scope="col">số lượng</th>
             <th scope="col">Giá</th>
             <th scope="col">Thành tiền</th>
           </tr>
         </thead>
         <tbody>
            {oder.map((item,index)=>{
                
                return(
                    <tr key={item.id}>
                    <th scope="row">{index+1}</th>
                    <td>{item.name}</td>
                    <td>{item.count}</td>
                    <td>{item.price}.đ</td>
                    <td>{Number(item.price)*item.count}.đ</td>
                  </tr>
                )
            })}
           
         </tbody>
       </table>
      <div style={{float:'right',marginRight:250, marginTop:50}}>
        <h2 style={{fontWeight:'bold',color:'#33ec80ef'}}>Tổng Tiền: {Totall()}.đ</h2>
      </div>
      <div style={{marginRight:250, marginTop:50}}>
        <button className="btn btn-success" type="button" onClick={()=>Thanhtoan()}>Thanh toán</button>
      </div>
       </div>
       
    </div>
    )
}

export default BillShow;
