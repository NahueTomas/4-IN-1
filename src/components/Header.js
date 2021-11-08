import { Link } from 'wouter'

import logo from '../img/icons/icon.png';
import './Header.css'

const Header = () => {
    return(
        <header className="Header">
            <div className="contenedor header-items-contenedor">
                <Link to="/">
                    <img className="img-logo" src={logo} alt="Icono del juego" />
                </Link>
                <h2 className="titulo-header">4-IN-1</h2>
            </div>
        </header>
    )
}

export default Header