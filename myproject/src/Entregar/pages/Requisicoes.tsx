import { useState } from "react";
import Cabe from "../../componentes/cabecalho";



function Requisicoes(){

    const [produtos , setProdutos] = useState([]);
    
    const carregarProdutos = () => {
        fetch('https://fakestoreapi.com/products')
                .then((response) => {
                    return response.json();
            })
                .then((json) => {
                    setProdutos(json);
            })
    }
    

    function zerarProdutos(){
        setProdutos([])
    }
    
        return(
        <div>
            <Cabe/>

            <h1>Page exemplo de requisições</h1>
            <hr /><br />
            <button onClick={carregarProdutos}>Carregar Produtos</button>
            <br />
            Total de produtos {produtos.length}
            <br /> <hr />
            <br />
            <br />
            <button onClick={zerarProdutos}>Zerar</button>
        </div>
    )
}

export default Requisicoes;