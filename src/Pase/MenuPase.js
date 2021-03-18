import React from 'react'
import Menu from '../Components/Menu'
import Cookies from 'js-cookie'

const MenuPase = () => {

    return (
        <Menu auth={Cookies.get('add')}/>
    )
}

export default MenuPase
