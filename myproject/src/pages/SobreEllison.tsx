import Cabe from "../componentes/cabecalho"
import Roda from "../componentes/rodape"
import { useNavigate } from "react-router-dom"

function SobreEllison() {

    const navegacao = useNavigate();

    function HandleVoltar(){
        navegacao('/')
    }

    return (
        <div>
            <Cabe/>
            SOBRE ELLISON
            <br/>
            <hr />
            <button onClick={HandleVoltar}>VOLTAR</button>
            <Roda/>
        </div>
    )
}

export default SobreEllison