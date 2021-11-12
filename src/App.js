import React from 'react';
import Laptop from './views/Laptop';
import "./App.css"


function App() {

  return (
    <div className="container">
      <Laptop name = "Apple" color = "gold" madeIn = "China" buttonColor = "orange"/>
      <Laptop name = "Dell" color = "grey" madeIn = "Lagos" buttonColor = "purple"/>
    
    </div>
  )
}
export default App;


