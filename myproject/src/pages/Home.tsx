import { useContext } from "react";
import Cabe from "../componentes/cabecalho";
import Roda from "../componentes/rodape";
import '../estilo/estilo.css'
import { UsuarioLogadoContext } from "../contexts/contextAuth";

function Home() {

    let numero1: number = 5;
    let numero2: number = 10;

    function Somar(n1: number, n2:number): number{
        return n1 * n2;
    }

    const UsuarioLogadoCtx = useContext(UsuarioLogadoContext);

    function handleClick(){
        UsuarioLogadoCtx?.setName('ELLISONSILVA');
    }

    return (
        <div>
            <Cabe   titulo="MEU TITULO - QUALQUER COISA"
                    pagina="home"
                    parametro='Parametro Informado'/>
                    
            ESSA É MINHA PÁGINA HOME
            <br />
            Variavel 1 é: {numero1}
            <br />
            Variavel 2 é: {numero2}
            <br />
            <button onClick={handleClick}>Click here...</button>
            <br />
            <button>Teste</button>
            <br />
            Usuario no Context: {UsuarioLogadoCtx?.name} {/*? = caso ele seja nullo ele não da erro*/}
            <Roda/>
        </div>
    )
}

export default Home 

//alteração teste de novo

