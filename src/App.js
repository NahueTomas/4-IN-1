import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'
import { Route } from 'wouter'
import Home from './views/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/play">
        <p>PAGINA DEL JUEGO</p>
      </Route>
      <Footer />
    </div>
  );
}

export default App;
