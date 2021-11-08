import './App.css';
import Header from './components/Header.js'
import { Route } from 'wouter'
import Home from './views/Home';
import Footer from './components/Footer';
import Play from './views/Play';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/play">
        <Play />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
