import React, { useState, useEffect } from 'react';
import './MobilePhoneList.css';
import { getMobilePhones } from '../../services/api';
import MobilePhoneCard from '../mobilePhoneCard/MobilePhoneCard';


function MobilePhoneList() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const exTime = 60 * 60 * 1000; // 60 minutos

  const fetchPhones = async () => {
    try {
      const data = await getMobilePhones();
      setPhones(data);
      setDataWithExpiration("phoneList", data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  function setDataWithExpiration(key, data) {
    const now = new Date();
    const item = {
      data: data,
      expiration: now.getTime() + exTime,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

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

  useEffect(() => {
    const cachedData = getDataWithExpiration("phoneList");

    if (cachedData) {
      setPhones(cachedData);
      setLoading(false);
    } else {
      fetchPhones();
    }
  }, []);

  

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="phone-list-container">
      <div className="phone-list">
        {phones.map(phone => (
          <MobilePhoneCard key={phone.id} phone={phone} />
        ))}
      </div>
    </div>
  );
}

export default MobilePhoneList;