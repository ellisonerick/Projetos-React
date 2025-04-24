import { useState } from "react"
import Cabe from "../componentes/cabecalho"
import Roda from "../componentes/rodape"
import { useParams, useNavigate } from "react-router-dom"
import { Button } from "reactstrap";

function Sobre() {

    const [numero, setnumero] = useState(0);
    const [nome, setnome] = useState('Ellison');

    function handleClickButton(){
        setnumero(numero + 1);
    }

    function handleSubtrair(){
        setnumero(numero - 1);
    }

    function handleMudarNome(){
        setnome('Jhony')
    }

    const navegacao = useNavigate();

    function HandleVoltar(){
        navegacao('/');
    }
    return (
        <div>
            <Cabe/>
            ESSA É A Sobre
            <hr />
            <br />
            Contador: {numero}
            <br />
            <div className="botaoSomar"><button onClick={handleClickButton}>Somar</button></div>
            <button onClick={handleSubtrair}>Subtrair</button>
            <br />
            <hr />
            <br /> <hr /> <br/>
            <button onClick={HandleVoltar}> VOLTAR</button>
            <br />
            Nome:
            <hr />
            O meu nome não é: {nome}
            <br />
            <button onClick={handleMudarNome}>Mudar Nome</button>
            <br />
            <hr />
            {/* <Button color="danger">Danger</Button> */}
            <Roda/>
        </div>
    )
}

export default Sobre

