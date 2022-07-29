import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span> En cours de chargement... </span>
  ) : (
    <div className='offer-container'>
      {data.offers.map((offer) => {
        return (
          <Link to={`/offer/${offer._id}`} key={offer._id}>
            <div className='link-card'>
              {offer.owner && (
                <div className='avatar'>
                  <img
                    src={offer.owner.account.avatar.secure_url}
                    alt='avatar'
                    className='img-avatar'
                  ></img>
                  <h3>{offer.owner.account.username}</h3>
                </div>
              )}

              <img
                src={offer.product_image.secure_url}
                alt='product'
                className='product'
              ></img>
              <p>{offer.product_price} €</p>
              {offer.product_details.map((item, index) => {
                return (
                  <div key={index} className='details'>
                    <p>{item.TAILLE}</p>
                    <p>{item.MARQUE}</p>
                  </div>
                );
              })}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
