import gh from '../img/icons/github.svg'
import ig from '../img/icons/instagram.svg'
import li from '../img/icons/linkedin.svg'
import tw from '../img/icons/twitter.svg'

import './Footer.css'

const Footer = () => {
    return(
        <footer className="Footer">
            <div className="contenedor">
                <p className="titulo-footer">Made by @nahuetomas</p>
                <div className="redes">
                    <a href="https://www.instagram.com/nahuetomas/?hl=es-la" target="_blank" rel="noreferrer">
                        <img src={ig} alt="Mi perfil de Instagram" />
                    </a>
                    <a href="https://twitter.com/NahueTomas" target="_blank" rel="noreferrer">
                        <img src={tw} alt="Mi perfil de Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/nahuetomas/" target="_blank" rel="noreferrer">
                        <img src={li} alt="Mi perfil de LinkedIn" />
                    </a>
                    <a href="https://github.com/NahueTomas" target="_blank" rel="noreferrer">
                        <img src={gh} alt="Mi perfil de Github" />
                    </a>
                </div>
                <hr></hr>
            </div>
        </footer>
    )
}

export default Footer