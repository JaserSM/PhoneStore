import React from 'react';
import './MobilePhone.css';
import { useLocation } from 'react-router';

const MobilePhone = () => {
  const location = useLocation();
  const { phoneData } = location.state || {};
  if (!phoneData) return <div>No se encontró información del teléfono</div>;


  return (
    <div className="mobile-phone-card">
      <div className="phone-header">
        <h2>{phoneData.brand} {phoneData.model}</h2>
        <span className="price">{phoneData.price.toFixed(2)}€</span>
      </div>
      
      <div className="phone-specs">
        <div className="spec-row">
          <span className="spec-label">Procesador:</span>
          <span className="spec-value">{phoneData.cpu}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">RAM:</span>
          <span className="spec-value">{phoneData.ram} GB</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Sistema Operativo:</span>
          <span className="spec-value">{phoneData.operatingSystem}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Pantalla:</span>
          <span className="spec-value">{phoneData.screenResolution}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Batería:</span>
          <span className="spec-value">{phoneData.battery} mAh</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Cámaras:</span>
          <span className="spec-value">{phoneData.cameras}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Dimensiones:</span>
          <span className="spec-value">{phoneData.dimensions}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Peso:</span>
          <span className="spec-value">{phoneData.weight} g</span>
        </div>
        {
        phoneData.images.length > 0 && <ul className='imagesContainer'>
          {phoneData.images.map(image => 
            <li key={image.id}>
              <img src={`http://localhost:8080/api/images/${phoneData.id}/${image.filePath}`} alt={`Phone image ${image.id}`} className='phoneImage'/>
            </li>
          )}
        </ul>
        }
      </div>
    </div>
  );
};

export default MobilePhone;