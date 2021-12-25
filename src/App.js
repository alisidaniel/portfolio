import React from 'react';
import "./App.css";
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './screens/home';

function App() { 
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
