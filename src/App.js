import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
