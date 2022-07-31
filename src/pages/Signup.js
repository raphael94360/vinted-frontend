import { useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newsletter, setNewsletter] = useState(true)
  const [token, setToken] = useState(Cookies.get("token"))

  console.log(token)

  const handleUserName = event => {
    setUsername(event.target.value)
  }

  const handleEmail = event => {
    setEmail(event.target.value)
  }

  const handlePassword = event => {
    setPassword(event.target.value)
  }

  const handleNewsLetter = event => {
    setNewsletter(event.target.value)
  }

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

      Cookies.set("token", response.data.token, { expires: 3 })
      setToken(response.data.token)
      navigate("/login")
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className="inscription">
      <div className="inscription-container">
        <h1>S'inscrire</h1>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" placeholder="Nom d'utilisateur" name="name" value={username} onChange={handleUserName}></input>
          <input type="email" placeholder="Email" name="email" value={email} onChange={handleEmail}></input>
          <input type="text" placeholder="Mot de passe" name="password" value={password} onChange={handlePassword}></input>
          <div className="newsletter">
            <input type="checkbox" value={newsletter} onChange={handleNewsLetter} />
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
