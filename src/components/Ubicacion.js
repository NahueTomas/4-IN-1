import './Ubicacion.css'

const Ubicacion = ({nivel, nivelesTotales}) => {
    return(
        <section className="contenedor-seccion contenedor-ubicacion">
            <p className="Ubicacion-texto">{`Nivel: ${nivel}/${nivelesTotales}`}</p>
        </section>
    )
}

export default Ubicacion