import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home.tsx';
import { View } from './pages/View.tsx';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/view" element={<View />}/>
    </Routes>
  )
}

export default App
