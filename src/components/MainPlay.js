import Info from "./Info"
import Tablero from "./Tablero"
import CajonPalabra from "./CajonPalabra"
import Ubicacion from "./Ubicacion"
import Reiniciar from "./Reiniciar"

const MainPlay = ({nivel, nivelesTotales}) => {
    return(
        <main className="MainPlay min-height">
            <Info nivel={nivel.nivel} />
            <Tablero imagenes={nivel.imagenes} />
            <CajonPalabra palabra={nivel.palabra} key={nivel.palabra} />
            <Ubicacion nivel={nivel.nivel} nivelesTotales={nivelesTotales} />
            <Reiniciar />
        </main>
    )
}

export default MainPlay