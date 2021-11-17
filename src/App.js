import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Navigation/Footer';
import Nav from './components/Navigation/Nav';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
