import "./App.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Offer from "./pages/Offer"
import Header from "./components/Header"
// import Hero from "./components/Hero"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
library.add(faMagnifyingGlass)

function App() {
  return (
    <Router>
      <div className="header">
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  )
}

export default App
