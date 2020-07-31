import React from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import Searchbar from './components/searchBar.js'
import ProductSection from './components/productSection.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
      <ProductSection id="productSection"/>
    </div>
  )
}

export default App
