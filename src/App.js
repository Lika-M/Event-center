import { Routes, Route } from 'react-router-dom'

import {AuthProvider} from './contexts/AuthContext.js';
import { Header } from './components/Header/Header.js';
import { Footer } from './components/Footer/Footer.js';
import { Home } from './components/Home/Home.js';
import { About } from './components/About/About.js';
import { Register } from './components/Register/Register.js';
import { Login } from './components/Login/Login.js';
import { Logout } from './components/Logout/Logout.js';
import { Events } from './components/Events/Events.js'
import './App.css';

function App() {


  return (
    <AuthProvider>

      <div className="wrapper">
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='logout' element={<Logout />} />
          <Route path='/calendar' element={<Events />} />

        </Routes>
        <Footer />
      </div>
      
    </AuthProvider>
  );
}

export default App;
