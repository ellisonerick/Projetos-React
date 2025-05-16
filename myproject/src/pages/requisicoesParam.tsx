// import { useState, useEffect, ChangeEvent } from "react";
// import { Usuarios } from "../types/usuarios";
// import Cabe from "../componentes/cabecalho";
// //import FormPost from '../componentes/formpost/index'

// function RequisicoesParam(){

//         const [usuarios , setUsuarios] = useState<Usuarios[]>([]);
//         const [loading, setLoading] = useState(false);
//         const [paramBusca, setparamBusca] = useState('');
    
//     useEffect(() => {

//     } , []);

//     const carregarUsuarios = async () => {
//         if(paramBusca){
//             setLoading(true);
//             let json = await api.CarregarUsuarioUnico(paramBusca);
//             const dataArray = Array.isArray(json) ? json: [json]
//             setLoading(false);
//             setUsuarios(dataArray);
//         }else{
//             setLoading(true);
//             let json = await api.CarregarTodosUsuarios();
//             const dataArray = Array.isArray(json) ? json: [json]
//             setLoading(false);
//             setUsuarios(dataArray);
//         }
//     }

//     const handleAddPost = async (title: string, body: string) => {
//         let json = await api.AdicionarUsuarios(title, body, 1);
//         if (json.id){
//             alert('Post Adicionado com sucesso!')
//             setUsuarios((usuarios) => [...usuarios, json]);
//         }else{
//             alert('Falha ao adicionar usuário')
//         }
//     }

//     const handleParamBuscaChange = (e: ChangeEvent<HTMLInputElement>) => {
//         setparamBusca(e.target.value)
//     }

//     return(
//         <div>
//             <Cabe/>
//             <hr /><br />
//             {loading &&
//                 <div>
//                     <h1>Página Exemplo Requisições Param</h1>
//                     <input type="text"
//                     value={paramBusca}
//                     onChange={handleParamBuscaChange}/>

//                     <button onClick={carregarUsuarios}>Carrega Usuários</button>
//                     <br />
//                     Total de Usuarios: {usuarios.length}
//                 </div>
//             }
//             <FormPost onAdd={handleAddPost}/>

//             <br /><hr />
//             <h1>Lista de Produtos</h1>
//             <div>
//                 {usuarios.map((item, index) => (
//                     <div>
//                         ID: {item.id}
//                         <br />
//                         USER: {item.title}
//                     </div>
//                 ))}
//             </div>
//         </div>

//     )
// }

// export default RequisicoesParam;