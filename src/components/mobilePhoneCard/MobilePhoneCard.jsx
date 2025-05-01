import { useNavigate } from 'react-router';
import './MobilePhoneCard.css';
import React from "react";

const MobilePhoneCard = ({ phone }) => {
  if (!phone) return <div>No se encontró información del teléfono</div>;
  const navigate = useNavigate();
  console.log(phone)
  const handlePhoneClick = () => {
    console.log("click");
    navigate(`/phone/${phone.id}`, { state: { phone: phone } });
  };

  return (
    <div className="mobilePhoneCard" onClick={handlePhoneClick}>
      <div className="phoneHeader" >
        <h2>{phone.brand}</h2>
        <h3>{phone.model}</h3> 
        <span className="price">{phone.price}€</span>
      </div>
        {
        phone.imgUrl != "" && 
        <div  className='imagesContainerCard'>
          <img src={phone.imgUrl} alt={`Phone ${phone.brand} ${phone.model}`}/>
        </div>
        }
    </div>
  );
};

export default MobilePhoneCard;