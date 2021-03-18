import React from 'react'
import { Link, Route } from 'react-router-dom';
import Tables from "../Components/Table/Tables";
import EditTable from "../Components/Table/EditTable";
const TablePase = () => {
    
    return (<>
      <div className="all-page-title page-breadcrumb">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-12">
            <h1>Quản Lý Bàn</h1>
          </div>
        </div>
      </div>
    </div>
        <div className="menu-box">
        <div className="container-fluid">
          
          <div className="row inner-menu-box">
            <div className="col-2">
              <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <label style={{color:'#fff',backgroundColor:'#33ec80ef',textAlign:'center',fontWeight:'bold',fontSize:25}} >Menu</label>

                <Link className="nav-link " data-toggle="pill" to="/Table" >All  </Link>
                <Link className="nav-link"  data-toggle="pill" to='/Table/edit'>Thêm Bàn </Link>
                
                
              </div>
            </div>
            <div className="col-10">
                
                <Route path='/Table/edit' component={EditTable}/>
                <Route path='/Table' exact component={Tables}/>
                <Route path='/Bill/:id' exact component={Tables}/>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default TablePase
