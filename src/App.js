import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://lereacteur-vinted-api.herokuapp.com/offers"
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className='offer'>
      {data.offers.map((offer, index) => {
        return (
          <div key={index}>
            {offer.owner ? (
              <div className='offer-avatar'>
                <img src={offer.owner.account.avatar.secure_url}></img>
                <h3>{offer.owner.account.username}</h3>
              </div>
            ) : (
              <h3>pas de owner</h3>
            )}

            {/* {offer.product_pictures.map((item, index) => {
              return (
                <div className='offer-img'>
                  <img src={item.secure_url}></img>
                </div>
              );
            })} */}
            <img src={offer.product_image.secure_url}></img>
            <p>{offer.product_price} €</p>
            {offer.product_details.map((item, index) => {
              return (
                <>
                  <p>{item.MARQUE}</p>
                  <p>{item.TAILLE}</p>
                </>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
