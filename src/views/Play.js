import { useEffect, useState } from "react"
import MainPlay from "../components/MainPlay"
import Cargando from "../components/Cargando"
import niveles from "../BDD"

const Play = () => {
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const valorLocal = parseInt(localStorage.getItem('nivel'))
        if(!valorLocal){
            localStorage.setItem('nivel', 0)
        } else if(valorLocal > niveles.length - 1){
            localStorage.setItem('nivel', (niveles.length - 1))
        } else if(valorLocal < 0){
            localStorage.setItem('nivel', 0)
        }
    }, [])

    setTimeout(() => {
        setCargando(false)
    }, 800);

    return(
        <>
            {
                cargando
                    ? <Cargando />
                    : <MainPlay nivelesTotales={niveles.length} nivel={niveles[parseInt(localStorage.getItem('nivel'))]}/>
            }
        </>
    )
}

export default Play