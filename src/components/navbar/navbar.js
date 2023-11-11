import "./navbar.css"
import {NavLink} from "react-router-dom";
import {BtnDarkMode} from "../btnDarkMode/btnDarkMode";
import logo from './logo_rena-toys.png'

export const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to='/' className="logo">
                        <img src={logo} alt={'sd'}/>
                    </NavLink>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink className={({isActive}) => defineClass(isActive)} to='/'>Главная</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink className={({isActive}) => defineClass(isActive)} to='/projects'>Проекты</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink className={({isActive}) => defineClass(isActive)} to='/contacts'>Контакты</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

function defineClass(activity) {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';
    return activity ? activeLink: normalLink;
}