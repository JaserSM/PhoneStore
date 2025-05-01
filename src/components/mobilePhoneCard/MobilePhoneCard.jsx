import { useNavigate } from 'react-router';
import './MobilePhoneCard.css';
import React, { useEffect, useState } from "react";

const MobilePhoneCard = ({ phone }) => {
  if (!phone) return <div>No se encontró información del teléfono</div>;
  const navigate = useNavigate();
  const handlePhoneClick = () => {
    navigate(`/phone/${phone.id}`, { state: { phone: phone } });
  };
  const [cachedImage, setCachedImage] = useState('');
  const [checked, setChecked] = useState(false);
  const exTime = 60 * 60 * 1000; // 60 minutos

  function getDataWithExpiration(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
  
    const item = JSON.parse(itemStr);
    const now = new Date();

    if (now.getTime() > item.expiration) {
      localStorage.removeItem(key);
      return null;
    }
    return item.data;
  }

  function setDataWithExpiration(data) {
    const now = new Date(); 
    const item = {
      data: data,
      expiration: now.getTime() + exTime,
    };
    localStorage.setItem(`img_${phone.imgUrl}`, JSON.stringify(item));
  }

  useEffect(() => {
    const cacheKey = `img_${phone.imgUrl}`;

    const cachedData = getDataWithExpiration(cacheKey);
    if (cachedData) {
      setCachedImage(cachedData);
      setChecked(true);
    }
    else{
      fetch(phone.imgUrl)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          setDataWithExpiration(base64data)
          setCachedImage(base64data);
        };
        reader.readAsDataURL(blob);
      });
      setChecked(true);
    }
  }, []);
  
  return (
    <div className="mobilePhoneCard" onClick={handlePhoneClick}>
      <div className="phoneHeader" >
        <h2>{phone.brand}</h2>
        <h3>{phone.model}</h3> 
        <span className="price">{phone.price}€</span>
      </div>
        {
          checked && 
          <div  className='imagesContainerCard'>
            <img src={cachedImage || phone.imgUrl} alt={`Phone ${phone.brand} ${phone.model}`}/>
          </div>
        }
    </div>
  );
};

export default MobilePhoneCard;