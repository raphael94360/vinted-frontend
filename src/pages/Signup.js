import { useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Signup = ({ token, setToken }) => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newsletter, setNewsletter] = useState(false)

  console.log(token)

  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup", {
        username: username,
        email: email,
        password: password,
        newsletter: newsletter
      })

      console.log(response.data)

      Cookies.set("token", response.data.token)
      setToken(response.data.token)
      navigate("/")
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className="inscription">
      <div className="inscription-container">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            name="name"
            value={username}
            onChange={event => {
              setUsername(event.target.value)
            }}
          ></input>

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={event => {
              setEmail(event.target.value)
            }}
          ></input>

          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value)
            }}
          ></input>

          <div className="newsletter">
            <input
              type="checkbox"
              value={newsletter}
              onChange={() => {
                setNewsletter(!newsletter)
              }}
            />
            <span> S'inscrire à notre newsletter</span>
          </div>

          <p>En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de confidentialité de Vinted. Je confirme avoir au moins 18 ans.</p>
          <button>S'INSCRIRE</button>

          <Link to="/login" className="link">
            <p>Tu as déjà un compte ? Connecte-toi !</p>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Signup
