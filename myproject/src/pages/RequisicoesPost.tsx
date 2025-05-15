
import { useState } from 'react';
import Cabe from '../componentes/cabecalho';
import Roda from '../componentes/rodape';
import '../estilo/estilo.css'
import { Usuarios } from '../types/usuarios';

function RequisicoesPost(){

    const [loading, setLoading] = useState(false);

    const [usuarios , setUsuarios] = useState<Usuarios[]>([]);

    const carregarUsuarios = async () => {
        setLoading(true);
        let response = await fetch('https://jsonplaceholder.typicode.com/todos');
        let json = await response.json();

        const dataArray = Array.isArray(json) ? json: [json]

        setLoading(false);
        setUsuarios(dataArray);
    }

    function zerarProdutos(){
        setUsuarios([])
    }

    return(
        <div>
            <Cabe/>
            {loading &&
                <div>Carregando Conteúdo...</div>
            }

            {!loading &&
                <div>
                    <h1>Página Exemplo de Requisições POST</h1>
                    <br />
                    <button onClick={carregarUsuarios}>Carregar Usuarios</button>
                    <br />
                    Total de Usuarios: {usuarios.length}
                    <br />
                    <br />
                    <hr />
                </div>
            }
            {!loading &&
                <div>
                    <div>
                        <h1>Adicionar no Post</h1>
                        <input type="text" name='titulo' id='titulo' placeholder='Digite um Título' />
                        <br />
                        <br />
                        <input type="text" name='descricao' id='descricao' />
                        <br />
                        <br />
                        <button>Adicionar</button>
                    </div>
                    <br /><hr />
                    <h1>Lista de Usuários</h1>
                    <br />
                    <div>
                        {usuarios.map((item, index) => (
                            <div key={index}>
                                USER ID: {item.userId}
                                <br />
                                TÍTULO: {item.title}
                                <br />
                                <hr />
                            </div>
                        ))}
                    <button onClick={zerarProdutos}>Zerar</button>
                    </div>
                </div>
            }
            <Roda/>
    </div>
    )
}

export default RequisicoesPost;