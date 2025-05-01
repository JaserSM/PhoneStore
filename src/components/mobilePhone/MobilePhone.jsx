import React from 'react';
import './MobilePhone.css';

const MobilePhone = ( phoneData ) => {
  const data = phoneData.phoneData;

  return (
    <div className="mobile-phone-card">
      <div className="phone-header">
        <h2>{data.brand} {data.model}</h2>
        <span className="price">{data.price}€</span>
      </div>
      
      <div className="phone-specs">
        <div className="spec-row">
          <span className="spec-label">Procesador:</span>
          <span className="spec-value">{data.cpu}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">RAM:</span>
          <span className="spec-value">{data.ram} GB</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Sistema Operativo:</span>
          <span className="spec-value">{data.os}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Pantalla:</span>
          <span className="spec-value">{data.displayResolution}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Batería:</span>
          <span className="spec-value">{data.battery} mAh</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Cámara:</span>
          <span className="spec-value">{data.primaryCamera}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Dimensiones:</span>
          <span className="spec-value">{data.dimentions}</span>
        </div>
        <div className="spec-row">
          <span className="spec-label">Peso:</span>
          <span className="spec-value">{data.weight} g</span>
        </div>
        
      </div>
    </div>
  );
};

export default MobilePhone;