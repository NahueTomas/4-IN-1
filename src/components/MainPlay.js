import Info from "./Info"
import Tablero from "./Tablero"
import CajonPalabra from "./CajonPalabra"
import Reiniciar from "./Reiniciar"
import EspacioBtnSig from "./EspacioBtnSig"
import './botonera.css'

const MainPlay = ({nivel, nivelesTotales}) => {
    return(
        <main className="MainPlay min-height">
            <Info nivel={nivel.nivel} nivelesTotales={nivelesTotales} />
            <Tablero imagenes={nivel.imagenes} />
            <CajonPalabra palabra={nivel.palabra} key={nivel.palabra} />
            <section className="contenedor-seccion botonera">
                <Reiniciar />
                <EspacioBtnSig />
            </section>
        </main>
    )
}

export default MainPlay