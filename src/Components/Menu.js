import React from 'react'
import Datas from '../Data/Firebase';

import Product from './Menu/Product';

const Menu = ({auth}) => {
 
    const [products,setProducts]=React.useState([]);
   
    var arry=[];
    React.useEffect(()=>{
      
      
      Datas.database().ref().child(auth).child('product').on('child_added',(snapshot)=>{
        arry.push(snapshot.val());
      })
      setProducts(arry);
    },[])
    
    return (
        <div className="menu-box">
        <div className="container-fluid" style={{marginTop:100}}>
         
           
          
          
          <div className="row inner-menu-box">
            <div className="col-2">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All</a>
                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Drinks</a>
                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Lunch
                </a><a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Dinner</a>
              </div>
            </div>
            <div className="col-10">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <div className="row">
                    {products.map((item,index)=>{
                      return(
                        <Product product={item} key={index}/>
                      )
                    })}
                   
                  </div>
                </div>
        
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Menu
