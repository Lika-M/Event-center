import { Routes, Route } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext.js';
import { Header } from './components/common/Header/Header.js';
import { Footer } from './components//common/Footer/Footer.js';
import { Home } from './components/Home/Home.js';
import { About } from './components/About/About.js';
import { Register } from './components/User/Register/Register.js';
import { Login } from './components/User/Login/Login.js';
import { Logout } from './components/User/Logout/Logout.js';
import { EventList } from './components/Events/EventList/EventList.js';
import { Create } from './components/Events/Create/Create.js';
import { Edit } from './components/Events/Edit/Edit.js';
import { PageNotFound } from './components/common/PageNotFound/PageNotFound.js';
import { EventDetail } from './components/Events/EventDetail/EventDetail.js';
import { UserRouteGuard } from './guards/UserRouteGuard.js';
import { Gallery } from './components/Gallery/Gallery.js';
import ErrorBoundary from './components/common/ErrorBoundary .js';
import './App.css';

function App() {


  return (
    <ErrorBoundary>
      <AuthProvider>

        <div className="wrapper">
          <Header />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/about/*' element={<About />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route element={<UserRouteGuard />}>
              <Route path='logout' element={<Logout />} />
              <Route path='/event/create' element={<Create />} />
              <Route path='/event/:id/edit' element={<Edit />} />
            </Route>
            <Route path='/calendar' element={<EventList />} />
            <Route path='/calendar/event/:id' element={<EventDetail />} />
            <Route path="*" element={<PageNotFound />} />
            
          </Routes>

          <Footer />
        </div>

      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
