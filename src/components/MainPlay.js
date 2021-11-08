import Info from "./Info"
import Tablero from "./Tablero"
import CajonPalabra from "./CajonPalabra"
import Reiniciar from "./Reiniciar"
import EspacioBtnSig from "./EspacioBtnSig"

const MainPlay = ({nivel, nivelesTotales}) => {
    return(
        <main className="MainPlay min-height">
            <Info nivel={nivel.nivel} nivelesTotales={nivelesTotales} />
            <Tablero imagenes={nivel.imagenes} />
            <CajonPalabra palabra={nivel.palabra} key={nivel.palabra} />
            <EspacioBtnSig />
            <Reiniciar />
        </main>
    )
}

export default MainPlay