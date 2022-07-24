import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar/NavBar'
import ComponentContainer from './components/ComponentContainer/ComponentContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <BrowserRouter>
    
      <div className="App">
        <NavBar/>
          <Routes>
            <Route path="/" element={< ComponentContainer
            />} />
          </Routes>
      </div>
      
      
    </BrowserRouter>
  )
}

export default App
