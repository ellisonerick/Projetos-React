import '../estilo/estilo.css'
import { useEffect, useState } from "react";
import Cabe from "../componentes/cabecalho";

import { Produto } from "../types/produtos";

function RequisicoesType(){

    const [produtos , setProdutos] = useState<Produto[]>([]);
    
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

    useEffect( () => {
        carregarProdutos();
    } , []
    );
    
        return(
        <div>
            <Cabe/>

            <h1>Page exemplo de requisições</h1>
            <hr /><br />
            <button onClick={carregarProdutos}>Carregar Produtos</button>
            <br />
            <h1>Total de produtos: {produtos.length}</h1>
                <div>
                    {produtos.map((item, index) => (
                        <div key={index}>
                            <img src={item.image} className='products' />
                            <br />
                            TITULO DO ITEM: {item.title}
                            <br />
                            DESCRIÇÃO DO ITEM: {item.description}
                            <br />
                            <hr />
                        </div>
                    ))}
                </div>
            <br /> <hr />
            <br />
            <br />
            <button onClick={zerarProdutos}>Zerar</button>
        </div>
    )
}

export default RequisicoesType;