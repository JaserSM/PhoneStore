import { useNavigate } from 'react-router';
import './MobilePhoneCard.css';
import React from "react";

const MobilePhoneCard = ({ phone }) => {
  if (!phone) return <div>No se encontró información del teléfono</div>;
  const navigate = useNavigate();

  const handlePhoneClick = () => {
    console.log("click");
    navigate(`/phone/${phone.id}`, { state: { phoneData: phone } });
  };

  return (
    <div className="mobilePhoneCard" onClick={handlePhoneClick}>
      <div className="phoneHeader">
        <h2>{phone.brand} {phone.model}</h2>
        <span className="price">{phone.price.toFixed(2)}€</span>
      </div>
        {
        phone.images.length > 0 && 
        <div  className='imagesContainerCard'>
          <ul>
            {phone.images.map(image => 
              <li key={image.id}>
                <img src={`http://localhost:8080/api/images/${phone.id}/${image.filePath}`} alt={`Phone image ${image.id}`} className='phoneImage'/>
              </li>
            )}
          </ul>
        </div>
        }
    </div>
  );
};

export default MobilePhoneCard;