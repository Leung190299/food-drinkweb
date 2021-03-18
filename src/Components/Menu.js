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
           
            <div className="col-12">
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
