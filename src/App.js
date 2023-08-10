import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AestheticSection from './components/AestheticSection';

function App() {
  const [aesthetic, setAesthetic] = useState("Nostalgic");
  const [secondary, setSecondary] = useState("Timeless");
  console.log(aesthetic);

  useEffect(() => {
    console.log('The fashion era aesthetic right now');
  }, [aesthetic, secondary]);
  
  useEffect(() => {
    console.log('Clothes are Timeless all the time');
  }, [secondary]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home aesthetic={aesthetic} setAesthetic={setAesthetic} />} />
        <Route path="/AestheticSection" element={<AestheticSection aesthetic={aesthetic} />} />
        <Route index element={<Home aesthetic={aesthetic} setAesthetic={setAesthetic} />} />
      </Routes>
    </Router>
  );
}

export default App;



