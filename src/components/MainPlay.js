import CajonPalabra from "./CajonPalabra"
import Info from "./Info"
import Tablero from "./Tablero"

const MainPlay = ({nivel}) => {
    return(
        <main className="MainPlay">
            <Info nivel={nivel.nivel} />
            <Tablero imagenes={nivel.imagenes} />
            <CajonPalabra palabra={nivel.palabra} key={nivel.palabra} />
        </main>
    )
}

export default MainPlay