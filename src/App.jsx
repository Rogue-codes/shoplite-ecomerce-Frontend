import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Accesories from './pages/Accesories'
import Clothing from './pages/Clothing'
import Home from './pages/Home'
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/clothing" element={<Clothing/>}/>
          <Route path="/accessories" element={<Accesories/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
