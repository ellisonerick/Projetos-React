import React, { useState } from "react";
import Cabe from "../componentes/cabecalho"
import Roda from "../componentes/rodape"


function Cadastro(){
    const [nomeCliente, setnomeCliente] = useState('');
    function ChangeNomeCliente(Modificação: React.ChangeEvent<HTMLInputElement>){
        setnomeCliente(Modificação.target.value);
    }
    const [dataCliente, setdataCliente] = useState('');
    function DataCliente(data: React.ChangeEvent<HTMLInputElement>){
        setdataCliente(data.target.value);
    }

    return(
        <div>
            <Cabe/>
            <h1>Página de Cadastro</h1>
            <hr />
            <label>Nome do Cliente</label>
            <br />
            <input type="text" onChange={ChangeNomeCliente} />
            <br />
            O nome digitado é: {nomeCliente}
            <hr />
            <br />
            <label>Data do Cliente</label>
            <br />
            <input type="datetime-local" onChange ={DataCliente} />
            <br />
            A data é: {dataCliente}

            <Roda/>
        
        </div>
    )
}

export default Cadastro