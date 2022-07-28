import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Offer from "./pages/Offer"

function App() {
  return (
    <Router>
      <div className="header">
        <p>HEADER</p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  )
}

export default App
