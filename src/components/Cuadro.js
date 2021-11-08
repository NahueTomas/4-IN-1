import './Cuadro.css'

const Cuadro = ({img}) => {
    return(
        <div className="cuadro">
            <img className="img-pista" src={img} alt="" />
        </div>
    )
}

export default Cuadro