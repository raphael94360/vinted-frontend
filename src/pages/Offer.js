import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const Offer = () => {
  const { id } = useParams()
  const [data, setData] = useState({})

  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`)
      setData(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error.response)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return isLoading ? (
    <span> En cours de chargement... </span>
  ) : (
    <div className="offer">
      <div className="offer-container">
        <div className="offer-img">
          <img src={data.product_image.secure_url} alt="product"></img>
        </div>
        <div className="offer-details">
          <p className="price">{data.product_price} € </p>
          <ul className="details">
            {data.product_details.map((detail, index) => {
              return (
                <li key={index}>
                  <span className="keys">{Object.keys(detail)} </span>
                  <span className="values">{Object.values(detail)}</span>
                </li>
              )
            })}
          </ul>
          <p className="name">{data.product_name}</p>
          <p className="description">{data.product_description}</p>
          <div className="owner">
            <img src={data.owner.account.avatar.secure_url} alt="avatar"></img>
            <p>{data.owner.account.username}</p>
          </div>
          <button className="buy">Acheter</button>
        </div>
      </div>
    </div>
  )
}

export default Offer
