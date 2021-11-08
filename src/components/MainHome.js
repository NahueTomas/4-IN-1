import Cartel from './Cartel.js'
import Tablero from './Tablero.js'
import CajonPalabra from './CajonPalabra.js'

const MainHome = () => {
    const imagenes = [ 
                    'https://www.filo.news/__export/1594968249178/sites/claro/img/2020/07/17/juan_manuel_fangio.jpg_423682103.jpg',
                    'http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2019/03/matematicas-px.jpg',
                    'https://www.mundodeportivo.com/files/image_449_221/files/fp/uploads/2021/11/06/6186ee11537f7.r_d.2898-2118-860.jpeg',
                    'https://ih1.redbubble.net/image.1351736946.3875/st,small,845x845-pad,1000x1000,f8f8f8.jpg'
                    ]

    return(
        <main className="MainHome">
            <div className="contenedor">
                <Cartel />
                <Tablero imagenes={imagenes} presentacion={true} />
                <CajonPalabra palabra="formula" estadoInicial="correcto" />
            </div>
        </main>
    )
}

export default MainHome