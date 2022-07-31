import axios from "axios"
import { useState } from "react"
import Cookies from "js-cookie"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [token, setToken] = useState(Cookies.get("token"))

  console.log(token)

  const handleEmail = event => {
    setEmail(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/login", {
        email: email,
        password: password
      })
      console.log(response.data)

      Cookies.set("token", response.data.token, { expires: 3 })
      setToken(response.data.token)
      navigate("/")
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <h1>Se Connecter </h1>
        <form onSubmit={handleSubmit} className="form">
          <input type="email" name="email" value={email} placeholder="Adresse email" onChange={handleEmail}></input>
          <input type="text" name="password" value={password} placeholder="Mot de passe" onChange={handlePassword}></input>
          <button>SE CONNECTER</button>
        </form>
        <Link to="/signup" className="link">
          <p> Pas encore de compte ? Inscris-toi !</p>
        </Link>
      </div>
    </div>
  )
}

export default Login
