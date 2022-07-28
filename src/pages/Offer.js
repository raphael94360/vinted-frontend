import { useParams } from "react-router-dom"

const Offer = ({ data }) => {
  const { _id } = useParams()

  return (
    <>
      <h1>PAGE OFFER : {_id}</h1>
      <img src={data.offer.product_image.secure_url}></img>
    </>
  )
}

export default Offer
