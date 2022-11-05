import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
