import './App.css';
import { Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Electronics from './screens/Electronics';
import Jewelery from './screens/Jewelery';
import MensClothing from './screens/MensClothing';
import WomensClothing from './screens/WomensClothing';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import ProductView from './components/ProductView';

function App() {
  return (
    <div className="App" style={{backgroundColor:"#F1F2F4"}}>
      <Header/>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Electronics' element={<Electronics/>}/>
        <Route exact path='/Jewelery' element={<Jewelery/>}/>
        <Route exact path='/MensClothing' element={<MensClothing/>}/>
        <Route exact path='/WomensClothing' element={<WomensClothing/>}/>
        <Route exact path='/ProductView' element={<ProductView/>}/>
      </Routes>
    </div>
  );
}

export default App;
