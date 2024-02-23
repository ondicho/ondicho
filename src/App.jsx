import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import KejaHome from './pages/KejaHome';

function App() {

  return (
    <>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/keja" element={<KejaHome />} />
      </Routes>
    </>
  );
}

export default App


