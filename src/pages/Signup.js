import { useState } from "react"
import axios from "axios"
import Cookies from "js-cookie"

const Signup = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [newsletter, setNewsletter] = useState(false)
  const [token, setToken] = useState(Cookie.get("token"))

  console.log(token)

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup", {
        username: username,
        email: email,
        password: password,
        newsletter: newsletter
      })

      console.log(response.data)

      Cookies.set("token", response.data.token, { expire: 3 })
      setToken(response.data.token)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <div className="inscription">
      <div className="inscription-container">
        <h1>Inscription</h1>
        <form>
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
            type="text"
            placeholder="Mot de passe"
            name="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value)
            }}
          ></input>
          <input
            type="checkbox"
            value={newsletter}
            onChange={event => {
              setNewsletter(event.target.value)
            }}
          />
          <p>En m'inscrivant je confirme avoir lu et accepté les Termes & Conditions et Politique de confidentialité de Vinted. Je confirme avoir au moins 18 ans.</p>
          <input type="submit" onSubmit={handleSubmit}></input>
        </form>
      </div>
    </div>
  )
}

export default Signup
