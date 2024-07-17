import { Component } from "react";
import {NavLink} from "react-router-dom"
import "./Nav.css"

const setActive = ({isActive})=> `sidebar__menu-link ${isActive  ? 'sidebar__menu-link--active': ''}`

class NavBar extends Component {
    render(){
        return(
            <nav className="sidebar">
                <a href="" className="logo sidebar__logo"><img src="https://clck.ru/38uBmz" alt="logo" style={{width: 80, height: 80}}/></a>
                <div className="sidebar__menu">
                    <ul className="sidebar__menu-list">
                        <li className="sidebar__menu-item">
                            <NavLink to="/class" className={setActive}>Главня</NavLink>
                        </li>
                        <li className="sidebar__menu-item">
                            <NavLink to="/OurPets" className={setActive}>Наши питомцы</NavLink>
                        </li>
                        <li className="sidebar__menu-item">
                            <NavLink to="/Contacts" className={setActive}>Контакты</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar