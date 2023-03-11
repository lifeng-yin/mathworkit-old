import React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { ThemeProvider } from './ThemeProvider';

import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';

import Landing from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Create from './pages/Create/Create';
import Settings from './pages/Settings/Settings';
import NotFound from './pages/NotFound/NotFound';
import Note from './pages/Note/Note'

import { AuthProvider } from './contexts/Auth';
import ApplicationShell from './components/Navbar/ApplicationShell';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AuthProvider>
          <ApplicationShell>
            <Routes>
              <Route path="/" element={<Landing/>}></Route>
              <Route path="/signup" element={<Signup/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
              <Route path="/" element={<PrivateRoutes/>}>
                
                <Route path="/settings" element={<Settings />}></Route>
              </Route>
              <Route path="/search" element={<Search/>}></Route>
              <Route path="/create" element={<Create />}></Route>

              <Route path="/note/:id" element={<Note />}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
          </ApplicationShell>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;