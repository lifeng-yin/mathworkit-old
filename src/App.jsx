import React from 'react';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Landing from './pages/Landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
