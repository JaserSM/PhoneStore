import { useLocation } from "react-router";
import Layout from "../../components/layout/layout";
import MobilePhone from "../../components/mobilePhone/MobilePhone";
import React, { useEffect, useState } from "react";
import { getMobilePhoneById } from "../../services/api";

const PhoneDetailPage = () => {
  const location = useLocation();
  const { phone } = location.state || {};
  
  const [phoneData, setPhoneData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cachedImage, setCachedImage] = useState('');
  const exTime = 60 * 60 * 1000; // 60 minutos


  useEffect(() => {
    const cacheKey = `img_${phone.imgUrl}`;

    // Verificar si la imagen ya está en caché
    const cachedData = getDataWithExpiration(cacheKey);
    if (cachedData) {
      setCachedImage(cachedData);
    }
    else{
      // Si no está en caché, descargarla y guardarla
      fetch(phone.imgUrl)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          setDataWithExpiration(cacheKey, base64data) // Guardar en localStorage
          setCachedImage(base64data);
        };
        reader.readAsDataURL(blob);
      });
    }
  }, [phone]);

  const fetchPhone = async () => {
    try {
      const data = await getMobilePhoneById(phone.id);
      setPhoneData(data);
      setDataWithExpiration(`phoneDetail-${phone.id}`, data);
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
    const cachedData = getDataWithExpiration(`phoneDetail-${phone.id}`);

    if (cachedData) {
      setPhoneData(cachedData);
      setLoading(false);
    } else {
      fetchPhone();
    }
  }, []);

  if (loading) return <div className="loading">Cargando...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <Layout pageName="PhoneDetail">
      <div>
      {
        phone.imgUrl != "" && 
        <div  className='imagesContainerCard'>
          <img src={cachedImage || phone.imgUrl} alt={`Phone ${phone.brand} ${phone.model}`}/>
        </div>
        }
      </div>
      <MobilePhone phoneData={ phoneData } />
    </Layout>
  );
};

export default PhoneDetailPage;