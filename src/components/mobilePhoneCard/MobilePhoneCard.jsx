import { useNavigate } from 'react-router';
import './MobilePhoneCard.css';
import React from "react";
import Carousel from '../carousel/carousel';

const MobilePhoneCard = ({ phone }) => {
  if (!phone) return <div>No se encontró información del teléfono</div>;
  const navigate = useNavigate();

  const handlePhoneClick = () => {
    console.log("click");
    navigate(`/phone/${phone.id}`, { state: { phoneData: phone } });
  };

  return (
    <div className="mobilePhoneCard">
      <div className="phoneHeader" onClick={handlePhoneClick}>
        <h2>{phone.brand} {phone.model}</h2>
        <span className="price">{phone.price.toFixed(2)}€</span>
      </div>
        {
        phone.images.length > 0 && 
        <div  className='imagesContainerCard'>
          <Carousel imagesPath={phone.images.map(image => `${phone.id}/${image.filePath}`)} phone={phone}/>
        </div>
        }
    </div>
  );
};

export default MobilePhoneCard;