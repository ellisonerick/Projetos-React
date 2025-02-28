import Cabe from './Cabe'
import Menu from './Menu'
import Roda from './Roda'
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