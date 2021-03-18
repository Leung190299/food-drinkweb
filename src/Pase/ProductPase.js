import React from 'react'
import { Link, Route } from 'react-router-dom';
import EditProduct from '../Components/Product/EditProduct';
import Products from '../Components/Product/Products';
import DeteilsProdct from '../Components/Product/DeteilsProdct';
import UpdateProduct from '../Components/Product/UpdateProduct';
import Categrory from '../Components/Product/Categrory';
const ProductPase = () => {
    return (<>
        <div className="all-page-title page-breadcrumb">
		<div className="container text-center">
			<div className="row">
				<div className="col-lg-12">
					<h1>Quản Lý Món Ăn</h1>
				</div>
			</div>
		</div>
	</div>
        <div className="menu-box" style={{backgroundColor:'inherit'}}>
        <div className="container-fluid">
       
          <div className="row inner-menu-box">
            <div className="col-2">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <label style={{color:'#fff',backgroundColor:'#33ec80ef',textAlign:'center',fontWeight:'bold',fontSize:25}} >Menu</label>

                <Link className="nav-link "   data-toggle="pill" to="/Product" >All  </Link>
                <Link className="nav-link"  data-toggle="pill" to='/Product/edit'>Thêm món </Link>
                <Link className="nav-link"  data-toggle="pill" to='/Product/Category'>Thể loại </Link>
                
              </div>
            </div>
            <div className="col-10">
                <Route path='/Product' exact component={Products}/>
                <Route path='/Product/edit' component={EditProduct}/>
                <Route path='/Product/Details/:id' component={DeteilsProdct}/>
                <Route path='/Product/Update/:id' component={UpdateProduct}/>
                <Route path='/Product/Category' component={Categrory}/>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default ProductPase
