const Info = ({nivel, nivelesTotales}) => {
    return(
        <section className="Info-contenedor contenedor-seccion" id="top">
            <h2 className="titulo">{`- Nivel ${nivel}/${nivelesTotales}`}</h2>
        </section>
    )
}

export default Info