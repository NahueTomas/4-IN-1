import logo from '../img/icons/icon.png';
import './Header.css'

const Header = () => {
    return(
        <header className="Header">
            <div className="contenedor header-items-contenedor">
                <img className="img-logo" src={logo}/>
                <h2 className="titulo-header">4-IN-1</h2>
            </div>
        </header>
    )
}

export default Header