import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  // console.log(data);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
    <div className='offer-single'>
      <div>
        <img src={data.product_image.secure_url} alt='product'></img>
      </div>
      <div>
        <p>{data.product_price} € </p>
        <ul>
          {data.product_details.map((detail, index) => {
            return (
              <li key={index}>
                <span>{Object.keys(detail)} : </span>
                <span>{Object.values(detail)}</span>
              </li>
            );
          })}
        </ul>
        <p>{data.product_name}</p>
        <p>{data.product_description}</p>
        <img src={data.owner.account.avatar.secure_url} alt='avatar'></img>
        <p>{data.owner.account.username}</p>
      </div>
    </div>
  );
};

export default Offer;
