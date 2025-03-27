import '../estilo/estilo.css'
import { useEffect, useState } from "react";
import Cabe from "../componentes/cabecalho";

import { Produto } from "../types/produtos";

function RequisicoesAsync(){

    const [produtos , setProdutos] = useState<Produto[]>([]);

    const [loading, setLoading] = useState(false);
    
    const carregarProdutos = async () => {
        setLoading(true);
        try{
            let response = await fetch('https://fakestoreapi.com/products');
            let json = await response.json();
            const dataArray = Array.isArray(json) ? json: [json]
            setLoading(false);

            setProdutos(dataArray);
            }catch (erro){
                setLoading(false);

                alert('Falha ao carregar os produtos. Tente novamente mais tarde.')
                console.error(erro);
            }
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

            {loading &&
                <div>Carregando conteúdo...</div>
            }

            {!loading &&
                <div>

                    <h1>Page exemplo de requisições Async</h1>
                    <hr /><br />
                    <button onClick={carregarProdutos}>Carregar Produtos</button>
                    <br />
                    <h1>Total de produtos: {produtos.length}</h1>
                </div>
            }
            {!loading &&
            <div>
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
            }   
        </div>    
    )
}

export default RequisicoesAsync;