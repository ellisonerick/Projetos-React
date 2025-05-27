import { useState } from "react";
import Cabe from "../componentes/cabecalho";
import Roda from "../componentes/rodape";
import '../estilo/estilo.css'

function CalculoIMC(){

    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [resultado, setResultado] = useState<string | null>(null);

    const calcularIMC = () => {
    const pesoNum = parseFloat(peso.replace(",", "."));
    const alturaNum = parseFloat(altura.replace(",","."));

      if (!pesoNum || !alturaNum || alturaNum === 0) {
      setResultado("Informe valores válidos.");
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = "";

    if (imc < 18.5) classificacao = "Abaixo do peso";
    else if (imc < 24.9) classificacao = "Peso normal";
    else if (imc < 29.9) classificacao = "Sobrepeso";
    else if (imc < 34.9) classificacao = "Obesidade grau I";
    else if (imc < 39.9) classificacao = "Obesidade grau II";
    else classificacao = "Obesidade grau III";

    setResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao})`);
    };

    //Peso
    const handlePesoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value;

    valor = valor.replace(/[^\d,]/g, "").replace(/(,.*?),/g, "$1");

    if (valor.includes(",")) {
    const [parteInt, parteDec] = valor.split(",");

    const novaParteInt = parteInt.slice(0, 3);
    const novaParteDec = parteDec.slice(0, 2);

    setPeso(`${novaParteInt},${novaParteDec}`);

    } else {
    setPeso(valor.slice(0, 3));
    }};

    //Altura
    const handleAlturaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value;

    valor = valor.replace(/[^\d,]/g, "").replace(/(,.*?),/g, "$1");

    if (valor.includes(",")) {
        const [parteInt, parteDec] = valor.split(",");

        if (parteInt.length > 1) return;
        if (parteDec.length > 2) return; 
        setAltura(`${parteInt},${parteDec}`);
    } else {
        if (valor.length > 1) return;
        setAltura(valor);
    }};

    return(
        <div>
            <Cabe/>
                <div className="imc-container">
                    <h2>Calculadora de IMC</h2>
                    <input
                        type="text"
                        placeholder="Peso (kg)"
                        value={peso}
                        onChange={handlePesoChange}
                    />
                    <input
                        type="text"
                        placeholder="Altura (m)"
                        value={altura}
                        onChange={handleAlturaChange}
                    />
                    <br />
                    <button onClick={calcularIMC}>Calcular</button>
                    {resultado && <p className="resultado">{resultado}</p>}
                </div>
            <Roda/>
        </div>
    )
}
export default CalculoIMC