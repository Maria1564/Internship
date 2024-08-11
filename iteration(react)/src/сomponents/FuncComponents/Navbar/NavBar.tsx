import {NavLink} from "react-router-dom"

type TypeIsActive = (props: {isActive: boolean}) => string
const setActive:TypeIsActive = ({isActive})=> `sidebar__menu-link ${isActive  ? 'sidebar__menu-link--active': ''}`

const NavBar = () => {
    
    return(
        <nav className="sidebar">
            <a href="" className="logo sidebar__logo"><img src="https://clck.ru/38uBmz" alt="logo" style={{width: 80, height: 80}}/></a>
            <div className="sidebar__menu">
                <ul className="sidebar__menu-list">
                    <li className="sidebar__menu-item">
                        <NavLink to="home" className={setActive}>Главня</NavLink>
                    </li>
                    <li className="sidebar__menu-item">
                        <NavLink to="ourPets" className={setActive}>Наши питомцы</NavLink>
                    </li>
                    <li className="sidebar__menu-item">
                        <NavLink to="contacts" className={setActive}>Контакты</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar