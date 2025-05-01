import React from 'react';
import './MobilePhone.css';

const MobilePhone = ({ phone }) => {
  if (!phone) return <div>No se encontró información del teléfono</div>;

  return (
    <div className="mobile-phone-card">
      <div className="phone-header">
        <h2>{phone.brand} {phone.model}</h2>
        <span className="price">{phone.price.toFixed(2)}€</span>
      </div>
      
      <div className="phone-specs">
        <div className="spec-row">
          <span className="spec-label">Procesador:</span>
          <span className="spec-value">{phone.cpu}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">RAM:</span>
          <span className="spec-value">{phone.ram} GB</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Sistema Operativo:</span>
          <span className="spec-value">{phone.operatingSystem}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Pantalla:</span>
          <span className="spec-value">{phone.screenResolution}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Batería:</span>
          <span className="spec-value">{phone.battery} mAh</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Cámaras:</span>
          <span className="spec-value">{phone.cameras}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Dimensiones:</span>
          <span className="spec-value">{phone.dimensions}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Peso:</span>
          <span className="spec-value">{phone.weight} g</span>
        </div>
        {
        phone.images.length > 0 && <ul className='imagesContainer'>
          {phone.images.map(image => 
            <li key={image.id}>
              <img src={`http://localhost:8080/api/images/${phone.id}/${image.filePath}`} alt={`Phone image ${image.id}`} className='phoneImage'/>
            </li>
          )}
        </ul>
        }
      </div>
    </div>
  );
};

export default MobilePhone;