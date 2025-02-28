import Cabe from "../componentes/cabecalho"
import Roda from "../componentes/rodape"
import React, { useState } from "react";


function Calculator(){

    const [n1, setN1] = useState(0);
    function changeN1(numero1: React.ChangeEvent<HTMLInputElement>){
        setN1(Number(numero1.target.value));
    }

    const [n2, setN2] = useState(0);
    function changeN2(numero2: React.ChangeEvent<HTMLInputElement>){
        setN2(Number(numero2.target.value));
    }

    const [resultado, setresultado] = useState(0);

    function handleSoma1(){
         setresultado(n1 + n2)
    }
    function handleSubtrair1(){
        setresultado (n1 - n2)
    }
    function handleMulti(){
        setresultado (n1 * n2)
    }
    function handleDivi(){
        setresultado (n1 / n2)
    }

    return(
        <div>
            <Cabe/>
            <h1>Calculator</h1>
            <hr />
            <label>Número 1:</label>
            <br />
            <input type="text" id="n1" onBlur={changeN1} />
            <br />
            <label>Número 2:</label>
            <br />
            <input type="text" id="n2" onBlur={changeN2} />
            <hr />
            <div className="estiloBotoes">
                <button className="botaoSoma" onClick={handleSoma1}>Somar</button>
                <button className="botaoSub" onClick={handleSubtrair1}>Subtrair</button>
                <button className="botaoMult" onClick={handleMulti}>Multiplicar</button>
                <button className="botaoDiv" onClick={handleDivi}>Dividir</button>
            </div>
            <br />
            Resultado = {resultado}
            <Roda/>
        </div>
    )
}

export default Calculator