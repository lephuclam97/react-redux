import React, { Component } from 'react';
import {Route,Link} from 'react-router-dom'

const menus = [
    {
        name : 'Trang chu',
        to: '/',
        exact: true
    },
    {
        name : 'Quan ly san pham',
        to: '/product-list',
        exact: false
    }
]

const MenuLink = ({label,to,activeOnlyWhenExact}) =>{

    return (
        <Route
            path = {to}
            exact = {activeOnlyWhenExact}
            
            children  = {({match}) =>{
                var active = match ?'active':''
                return(
                    <li className = {active}    >
                        <Link to  = {to}   >
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
}

class Menu extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default " role="navigation">
                    <a className="navbar-brand">QUAN LY ADMIN</a>
                    <ul className="nav navbar-nav">
                        
                        {this.showMenu(menus)}
                    </ul>
                </nav>
            </div>
        );
    }
    showMenu = (menus) =>{
        var result = null;
        if(menus.length > 0){
            result = menus.map((menu,index) =>{
                return <MenuLink
                    key = {index}
                    label = {menu.name}
                    to = {menu.to}
                    activeOnlyWhenExact = {menu.exact}
                />
            })
        }

        return result
    }


}







export default Menu;
