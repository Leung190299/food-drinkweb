import React from 'react'

const Product = ({product}) => {
    return (
      <div className="card  mb-2 " style={{maxWidth: '18rem',marginLeft:15}}>
      <div className="card-header" ><h2 style={{color:'#face2f',textAlign:'center',fontWeight:'bold'}}>{product.name}</h2></div>
      <div className="card-body">
         <img src={product.imageURL} className="img-thumbnail" alt=""/>
       
      </div>
      <div className="card-header "><h3>Giá:</h3>
      <h2 style={{color:'#face2f'}}>{product.price}.Vnd</h2></div>
    </div>
    )
}

export default Product
