
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
//import AulaAtiv from './ExerAula';

function App() {
  
  return (
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
    </Routes>
  )
}

export default App
