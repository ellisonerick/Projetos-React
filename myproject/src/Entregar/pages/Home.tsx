import Cabe from "../../componentes/cabecalho/index";
import Roda from "../../componentes/rodape/index";
import '../estilo/estilo.css'

function Home() {
    return (
        <div>
            <Cabe titulo="MEU TITULO - QUALQUER COISA" pagina="home"/>
            ESSA É MINHA PÁGINA HOME        
            <Roda/>
        </div>
    )
}

export default Home