import React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import PrivateRoutes from './components/PrivateRoutes/PrivateRoutes';

import Landing from './pages/Landing/Landing';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import Browse from './pages/Browse/Browse';
import NotFound from './pages/NotFound/NotFound';

import { AuthProvider } from './contexts/Auth';

console.log(import.meta.url)
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Landing/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<PrivateRoutes/>}>
            <Route path="/browse" element={<Browse />}></Route>
          </Route>
          <Route path="/browse" element={<Browse/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

console.log(import.meta.env)