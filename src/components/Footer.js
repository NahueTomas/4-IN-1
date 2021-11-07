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
                    <a href="https://www.instagram.com/nahuetomas/?hl=es-la" target="_blank">
                        <img src={ig} />
                    </a>
                    <a href="https://www.linkedin.com/in/nahuel-rodr%C3%ADguez-391629203/" target="_blank">
                        <img src={li} />
                    </a>
                    <a href="https://twitter.com/NahueTomas" target="_blank">
                        <img src={tw} />
                    </a>
                    <a href="https://github.com/NahueTomas" target="_blank">
                        <img src={gh} />
                    </a>
                </div>
                <hr></hr>
            </div>
        </footer>
    )
}

export default Footer