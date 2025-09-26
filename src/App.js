import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Switches from './Pages/Switches';
import PvcFittings from './Pages/PvcFittings';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/switches' element={<Switches/>}/>
        <Route path='/pvcfittings' element={<PvcFittings/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
