
//import AtiviAula05 from './AtiviAula05';
//import './estilo/estilo.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import SobreEllison from './pages/SobreEllison';
import NotFound from './pages/NotFound';
import Cadastro from './pages/Cadasatro';
import Calculator from './pages/Calculadora';
//import AulaAtiv from './ExerAula';

function App() {
  
  return (
    <Routes>
      <Route path='*' element={<NotFound/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/sobre' element={<Sobre/>} />
      <Route path='/sobre/SobreEllison' element={<SobreEllison/>} />
      <Route path='/cadastro' element={<Cadastro/>} />
      <Route path='/calculadora' element={<Calculator/>} />
    </Routes>
  )
}

export default App
