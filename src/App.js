import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Offer from "./pages/Offer"
import axios from "axios"
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers")
    setData(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Router>
        <div className="header">
          <p>HEADER</p>
        </div>
        {isLoading ? <span>En cours de chargement... </span> : <Home data={data} />}
        <Routes>
          <Route path="/offer/:id" element={<Offer data={data} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
