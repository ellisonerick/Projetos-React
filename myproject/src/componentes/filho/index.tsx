import '../../estilo/estilo.css'

type Comunicacao_Props = {
    texto: string
    FN_Acao: () => void // função que não retorna nada
}

function Filho(valores: Comunicacao_Props){
    return(
        <div className='filho-container'>
            {valores.texto}
            <br />

            <button onClick={valores.FN_Acao}>Clique Aqui</button>
        </div>
    )
}
export default Filho;
