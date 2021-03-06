import './Reiniciar.css'

const Reiniciar = () => {
    let nivel = parseInt(localStorage.getItem('nivel'))

    const reiniciar = () => {
        localStorage.setItem('nivel', 0)
        window.location.href = '/play'
    }
    const volverAtras = () => {
        nivel = parseInt(nivel) - 1
        localStorage.setItem('nivel', nivel)
        window.location.href = '/play'
    }

    return(
        <div className="contenedor-botones">
            {
                nivel !== 0
                    ? <button className="btn-volver" onClick={volverAtras}>Volver al nivel anterior</button>
                    : null
            }
            <button className="btn-reiniciar" onClick={reiniciar}>Reiniciar juego</button>
        </div>
    )
}

export default Reiniciar