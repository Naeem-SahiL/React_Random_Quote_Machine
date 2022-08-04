import './App.css';
import QuoteCard from './QuoteCard';
import React, { useState } from 'react'




function App() {
  const [color, setColor] = useState('#333');

  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center wrapper" style={{backgroundColor: color}}>
      <QuoteCard color={color} setColor={setColor} />
    </div>
  );
}

export default App;
