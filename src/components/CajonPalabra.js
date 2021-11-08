import { useState } from 'react'
import './CajonPalabra.css'

const CajonPalabra = ({palabra = 'error', estadoInicial = "neutro"}) => {

    const [ estado, setEstado ] = useState(estadoInicial)

    const funcionGuiones = () => {
        const guiones = []
        palabra.split('').forEach((letra, index) => {
            guiones[index] = '_'
        });
        const stringGuiones = guiones.join('')
        return stringGuiones
    }

    const verificarPalabra = (e) => {
        e.preventDefault()
        const inputValue = document.querySelector('.palabra-cajon').value
        if(inputValue.toUpperCase() === palabra.toUpperCase()){
            setEstado('correcto')
            const btn = document.querySelector('.btn-siguiente')
            btn.disabled = false
            btn.classList.add('btn-activado')
        } else {
            setEstado('incorrecto')
        }
    }

    return(
        <section className={`CajonPalabra ${estado}`}>
            <form className="form-palabra" onSubmit={verificarPalabra} >
                {
                    estado === "correcto" 
                        ? <input type="text" placeholder={funcionGuiones()} className="palabra-cajon" readOnly value={palabra} />
                        : <input type="text" placeholder={funcionGuiones()} className="palabra-cajon" />
                }
            </form>
        </section>
    )
}

export default CajonPalabra