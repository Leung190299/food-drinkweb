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
            
            <div className="col-12">
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
