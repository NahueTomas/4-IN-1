import './EspacioBtnSig.css'

function EspacioBtnSig() {
    const pasarNivel = () => {
        console.log('HOLA')
        let nivel = parseInt(localStorage.getItem('nivel'))
        nivel = nivel + 1
        localStorage.setItem('nivel', nivel)
        window.location.href = '/play'
    }

    return (
        <button className="btn-siguiente" onClick={pasarNivel}>siguiente nivel! →</button>
    )
}

export default EspacioBtnSig;