import Cabe from "../componentes/cabecalho";
import Roda from "../componentes/rodape";
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