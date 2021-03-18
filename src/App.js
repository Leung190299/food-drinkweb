import React from 'react'
import Header from './Components/Header'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import {ProvideAuth} from './Context/AuthContext'
import HomePase from './Pase/HomePase'
import MenuPase from './Pase/MenuPase'
import Login from './Pase/Login';
import TablePase from './Pase/TablePase'
import ProtectedRouter from './Protecte/ProtectedRouter'
import ProductPase from './Pase/ProductPase'
import Footer from './Components/Footer'
import BillPase from './Pase/BillPase'

const App = () => {
    return (
        <ProvideAuth>
        <Router>
        
        <Header/>
        <Switch>
            <Route path='/' exact component={HomePase}/>
            <ProtectedRouter path='/Menu'>{MenuPase}</ProtectedRouter>
            <ProtectedRouter path='/Table'>{TablePase}</ProtectedRouter>
            <ProtectedRouter path='/Product'>{ProductPase}</ProtectedRouter>
            <ProtectedRouter path='/Bill'>{BillPase}</ProtectedRouter>
            <Route path='/Login' component={Login}/>
            
        </Switch>
        <Footer/>
        </Router>
        </ProvideAuth>
    )
}

export default App
