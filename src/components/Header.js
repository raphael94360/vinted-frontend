import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>

      <span className="icon-container">
        <FontAwesomeIcon icon="magnifying-glass" className="icon" />
      </span>

      <input type="text" placeholder="Recherche des articles" />

      <Link to="/signup">
        <button>S'inscrire</button>
      </Link>
      <button>Se connecter</button>
    </div>
  )
}

export default Header
