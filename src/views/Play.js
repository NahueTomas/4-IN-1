import { useEffect, useState } from "react"
import MainPlay from "../components/MainPlay"
import Cargando from "../components/Cargando"
import niveles from "../BDD"

const Play = () => {
    const [nivel, setNivel] = useState(parseInt(localStorage.getItem('nivel')))
    //const next = () => setNivel(nivel + 1)

    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const valorLocal = parseInt(localStorage.getItem('nivel'))
        if(!valorLocal){
            localStorage.setItem('nivel', 0)
        } else if(valorLocal > niveles.length - 1){
            localStorage.setItem('nivel', niveles.length - 1)
        } else if(valorLocal < 0){
            localStorage.setItem('nivel', 0)
        }
    }, [])

    localStorage.setItem('nivel', nivel)
    setTimeout(() => {
        setCargando(false)
    }, 1000);

    return(
        <>
            {
                cargando
                    ? <Cargando />
                    : <MainPlay nivel={niveles[nivel]}/>
            }
        </>
    )
}

export default Play