import { Link } from 'wouter'

import './Demostracion.css'

const Demostracion = () => {
    return(
        <section className="contenedor-demostracion">
            <Link to="/play" className="btn-jugar">Jugar!</Link>
            <div className="cuadros-demostracion">
                <div className="cuadro cuadro-uno">
                    <img className="img-pista" src="https://www.filo.news/__export/1594968249178/sites/claro/img/2020/07/17/juan_manuel_fangio.jpg_423682103.jpg"/>
                </div>
                <div className="cuadro cuadro-dos">
                    <img className="img-pista" src="http://cdn2.dineroenimagen.com/media/dinero/styles/xlarge/public/images/2019/03/matematicas-px.jpg"/>
                </div>

                <div className="cuadro cuadro-tres">
                    <img className="img-pista" src="https://www.mundodeportivo.com/files/image_449_221/files/fp/uploads/2021/11/06/6186ee11537f7.r_d.2898-2118-860.jpeg"/>
                </div>

                <div className="cuadro cuadro-cuatro">
                    <img className="img-pista" src="https://ih1.redbubble.net/image.1351736946.3875/st,small,845x845-pad,1000x1000,f8f8f8.jpg"/>
                </div>
            </div>
        </section>
    )
}

export default Demostracion