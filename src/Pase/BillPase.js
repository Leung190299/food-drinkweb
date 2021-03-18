import React from 'react'
import { Link,Route } from 'react-router-dom'
import Bills from '../Components/Bill/Bills'
import BillShow from '../Components/Bill/BillShow'


const BillPase=()=> {
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

                <Link className="nav-link " exact data-toggle="pill" to="/Bill" >All  </Link>
                <Link className="nav-link"  data-toggle="pill" to='/Product/edit'>Thêm món </Link>
                <Link className="nav-link"  data-toggle="pill" to='/Product/Category'>Thể loại </Link>
                
              </div>
            </div>
            <div className="col-10">
                <Route path='/Bill' exact component={Bills}/>
                <Route path='/Bill/:id'  component={BillShow}/>
                
            </div>
          </div>
        </div>
      </div>
      </>
    )
    
}

export default BillPase;
