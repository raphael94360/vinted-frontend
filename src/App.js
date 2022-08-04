import "./App.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Cookies from "js-cookie"
import Home from "./pages/Home"
import Offer from "./pages/Offer"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Header from "./components/Header"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
library.add(faMagnifyingGlass)

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null)
  return (
    <Router>
      <div className="header">
        <Header token={token} setToken={setToken} />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup token={token} setToken={setToken} />} />
        <Route path="/login" element={<Login token={token} setToken={setToken} />} />
      </Routes>
    </Router>
  )
}

export default App
