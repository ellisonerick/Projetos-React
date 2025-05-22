import { Link } from 'react-router-dom'
import '../../estilo/estilo.css'

type Informacoes = {
    titulo?: string;
    pagina?: string;
    parametro?: string;
}

function Cabe(valores: Informacoes) {
    return(
        <div className='divCabePai'>
            <div className='diviCabe'>
                <div>
                    A pagina é; {valores.pagina} <br />
                    O titulo da page é: {valores.titulo}
                </div>
                <div className='iconHome'>
                    <Link to={'/'}> HOME </Link>
                </div>
                <div className='iconSobre'>
                    <Link to={'/sobre'}> SOBRE </Link>
                </div>
                <div className='icon3'>
                    <Link to={'/sobre/SobreEllison'}> Sobre Ellison </Link>
                </div>
                <div className='icon3'>
                    <Link to={'/cadastro'}>Cadastro</Link>
                </div>
                <div className='icon3'>
                    <Link to={'/calculadora'}>Calculadora</Link>
                </div>
            </div>
        </div>
    )
}

export default Cabe