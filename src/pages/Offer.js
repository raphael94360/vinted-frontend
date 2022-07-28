import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

const Offer = () => {
  const { id } = useParams()
  const [dataOffer, setDataOffer] = useState({})
  console.log(dataOffer)
  const [isLoading, setIsLoading] = useState(true)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`)
      setDataOffer(response.dataOffer)
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
    <div className="offer-single">
      {dataOffer.offers.map(offer => {
        return <img src={offer.product_image.secure_url}></img>
      })}
    </div>
  )
}

export default Offer
