import { Link } from 'wouter'
import Cuadro from './Cuadro'

import './Tablero.css'

const Tablero = ({imagenes, presentacion = false}) => {
    return(
        <section className="contenedor-tablero contenedor-seccion">
            {
                presentacion ?<Link to="/play" className="btn-jugar">Jugar!</Link> :console.log('')
            }
            
            <div className="cuadros-tablero">
                { imagenes.map(cuadroIMG => <Cuadro img={cuadroIMG} key={cuadroIMG} />) }
            </div>
        </section>
    )
}

export default Tablero