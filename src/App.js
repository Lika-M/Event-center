import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { Home } from './components/Home/Home.js';
import { About } from './components/About/About.js';
import { Register } from './components/Register/Register.js';
import { Login } from './components/Login/Login.js';
import { Events } from './components/Events/Events.js'
import AuthContext from './contexts/authContext.js';
import './App.css';

function App() {


  return (
    <AuthContext.Provider value={{}}>
      <div className="wrapper">
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/calendar' element={<Events />} />

        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
