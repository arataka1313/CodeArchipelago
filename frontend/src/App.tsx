import { Routes, Route,} from "react-router-dom";
import { Home } from './pages/home/Home.tsx';
import { View } from './pages/view/View.tsx';
import './App.css'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/view" element={<View />}/>
    </Routes>
  )
}

export default App
