import React, { useState, useEffect } from 'react';
import './MobilePhoneList.css';
import { getMobilePhones } from '../../services/api';
import MobilePhoneCard from '../mobilePhoneCard/MobilePhoneCard';



function MobilePhoneList() {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const data = await getMobilePhones();
        setPhones(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhones();
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