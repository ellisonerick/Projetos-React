import '../../estilo/estilo.css'
import Filho from '../filho';

function Pai(){

    function HandleClick(){
        alert('Mensagem disparada no Pai!')
    }
    return(
        <div className='pai-container'>
            <Filho texto='Origem do texto = Pai'
                   FN_Acao={HandleClick}/>
            <br />
        </div>
    )
}

export default Pai;
