import Cabe from './componentes/cabeatv.tsx/index'
import Menu from './componentes/menu/index'
import Roda from './componentes/rodape/index'
import './estilo/estilo.css'

function AtiviAula05() {
    return(
        <div className="divcomp">
            COMPONENTE 1 - PÁGINA
            <div>
                <Menu/>
                <Cabe/>
                <Roda/>
            </div>
        </div>
    )
}

export default AtiviAula05