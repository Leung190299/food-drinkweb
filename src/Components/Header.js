import { Button } from '@material-ui/core'
import React from 'react'
import {Link,NavLink} from 'react-router-dom'
import Cookies from 'js-cookie'
const Header = () => {
	
	const Logout=()=>{
		Cookies.remove('add');
		window.location.reload();
	}
    return (
        <header className="top-navbar " style={{position:'fixed'}}>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container">
				<NavLink className="navbar-brand" to="/">
					<img src="images/logo.png" alt="" />
				</NavLink>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-rs-food" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
				  <span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbars-rs-food">
					<ul className="navbar-nav ml-auto">
                        <li className='nav-item '>
                            <Link to='/' exact className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Menu' exact className='nav-link'>Menu</Link>
                        </li>
						
						<li className="nav-item dropdown">
							<NavLink className="nav-link dropdown-toggle" to="#" id="dropdown-a" data-toggle="dropdown">Quản lý</NavLink>
							<div className="dropdown-menu" aria-labelledby="dropdown-a">
								<NavLink className="dropdown-item" to="/Table">Quản lý bàn</NavLink>
								<NavLink className="dropdown-item" to="/Bill">Danh sách món được gọi </NavLink>
								<NavLink className="dropdown-item" to="/Product">Quản lý món ăn</NavLink>
							</div>
						</li>
                        
						<li className="nav-item dropdown">
							<NavLink className="nav-link dropdown-toggle" to="#" id="dropdown-a" data-toggle="dropdown"> Tài Khoản</NavLink>
							<div className="dropdown-menu" aria-labelledby="dropdown-a">
								<NavLink className="dropdown-item" to="blog.html">Thôn tin tài khoản</NavLink>
								<Button className="dropdown-item" variant="text" onClick={Logout} >Đăng xuất</Button>
							</div>
						</li>
						
					</ul>
				</div>
			</div>
		</nav>
	</header>
    )
}

export default Header
