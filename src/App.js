import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Navbar from './components/navegacion/NavBar';
import Inicio from './components/paginas/Inicio';
import Ofertas from './components/paginas/Ofertas'
import Contacto from './components/paginas/Contacto'
import ItemListContainer from './components/navegacion/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ItemListContainer msg="Hola soy ItemListContainer desde una  prop" />

        <Routes>
          <Route path='/' exact component={Inicio} />
          <Route path='/ofertas' component={Ofertas} />
          <Route path='/contacto' component={Contacto} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
