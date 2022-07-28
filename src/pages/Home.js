import { Link } from "react-router-dom"

const Home = ({ data }) => {
  return (
    <div className="offer">
      {data.offers.map(offer => {
        return (
          <div key={offer._id} className="link">
            <Link to={`/offer/${offer._id}`}> </Link>
            {offer.owner && (
              <div className="offer-avatar">
                <img src={offer.owner.account.avatar.secure_url}></img>
                <h3>{offer.owner.account.username}</h3>
              </div>
            )}

            <img src={offer.product_image.secure_url}></img>
            <p>{offer.product_price} €</p>
            {offer.product_details.map((item, index) => {
              return (
                <div key={index}>
                  <p>{item.TAILLE}</p>
                  <p>{item.MARQUE}</p>
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default Home
