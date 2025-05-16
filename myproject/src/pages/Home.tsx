import { useContext, useState } from "react";
import Cabe from "../componentes/cabecalho";
import Roda from "../componentes/rodape";
import '../estilo/estilo.css'
import { UsuarioLogadoContext } from "../contexts/contextAuth";

function Home() {

    const [numero1, setNumero1] = useState<string>('');
    const [numero2, setNumero2] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);

    function Somar(n1: number, n2:number): number{
        return n1 + n2;
    }


    const handleClick1 = () => {
        const resultadoSoma = Somar(Number(numero1), Number(numero2));
        setResultado(resultadoSoma);
      };

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
            <input
                type="text"
                value={numero1}
                onChange={(e) => setNumero1(e.target.value)}
                placeholder="Digite o primeiro número"
                inputMode="numeric"
            />

            <br />
            <input
                type="text"
                value={numero2}
                onChange={(e) => setNumero2(e.target.value)}
                placeholder="Digite o segundo número"
                inputMode="numeric"
            />

            <br />
            <button onClick={handleClick1}>Somar</button>
            <br />
            Soma é igual: {resultado}
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

