import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Offer from "./pages/offer/Offer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faMagnifyingGlass);

function App() {
  return (
    <Router>
      <>
        <div className='header'>
          <Header />
        </div>
        <div className='hero'>
          <Hero />
        </div>
      </>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/offer/:id' element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
