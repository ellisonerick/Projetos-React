
//import AtiviAula05 from './AtiviAula05';
//import './estilo/estilo.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import SobreEllison from './pages/SobreEllison';
import NotFound from './pages/NotFound';
import Cadastro from './pages/Cadasatro';
import Calculator from './pages/Calculadora';
import Atividade from './pages/Atividade';
import Condicional from './pages/Condicional';
import Comunicacao from './pages/Comunicacao';
import Requisicoes from './pages/Requisicoes';
import RequisicoesType from './pages/Requisicoestype';
import RequisicoesAsync from './pages/RequisicoesAsync';
import RequisicoesPost from './pages/RequisicoesPost';
import { UsuarioLogadoProvider } from './contexts/contextAuth';
import CalculoIMC from './pages/IMC';
//import AulaAtiv from './ExerAula';

function App() {
  
  return (
    <UsuarioLogadoProvider>
      <Routes>
        <Route path='*' element={<NotFound/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/sobre' element={<Sobre/>} />
        <Route path='/atividade' element={<Atividade/>} />
        <Route path='/sobre/SobreEllison' element={<SobreEllison/>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/calculadora' element={<Calculator/>} />
        <Route path='/condicional' element={<Condicional/>} />
        <Route path='/comunicacao' element={<Comunicacao/>} />
        <Route path='/requisicoes' element={<Requisicoes/>} />
        <Route path='/requisicoestype' element={<RequisicoesType/>} />
        <Route path='/requisicoesasync' element={<RequisicoesAsync/>} />
        <Route path='/requisicoespost' element={<RequisicoesPost/>}/>
        <Route path='/imc' element={<CalculoIMC/>}/>
      </Routes>
    </UsuarioLogadoProvider>
  )
}

export default App
