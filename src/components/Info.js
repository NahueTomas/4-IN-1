import './Info.css'

const Info = ({nivel}) => {
    const pasarNivel = (e) => {
        let nivel = parseInt(localStorage.getItem('nivel'))
        nivel = nivel + 1
        localStorage.setItem('nivel', nivel)
        window.location.href = '/play'
    }

    return(
        <section className="Info-contenedor contenedor-seccion">
            <h2 className="titulo">{`- Nivel: ${nivel}`}</h2>
            <button className="btn-siguiente" onClick={pasarNivel}>siguiente nivel! →</button>
        </section>
    )
}

export default Info