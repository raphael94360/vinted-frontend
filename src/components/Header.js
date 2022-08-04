import logo from "../assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"
// import { useState } from "react"

const Header = ({ token, setToken }) => {
  // const handleRemoveCookie = () => {
  //   setToken(Cookies.remove("token"))
  // }

  return (
    <div className="header-container">
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
      <span className="icon-container">
        <FontAwesomeIcon icon="magnifying-glass" className="icon" />
      </span>
      <input type="text" placeholder="Recherche des articles" />

      {token ? (
        <Link to="/">
          <button
            onClick={() => {
              Cookies.remove("token")
              setToken(null)
            }}
          >
            Se déconnecter
          </button>
        </Link>
      ) : (
        <>
          <Link to="/signup">
            <button>S'inscrire</button>
          </Link>

          <Link to="/login">
            <button>Se connecter</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Header
