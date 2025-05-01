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

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const data = await getMobilePhoneById(phone.id);
        setPhoneData(data);
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
    <Layout pageName="PhoneDetail">
      <div>
      {
        phone.imgUrl != "" && 
        <div  className='imagesContainerCard'>
          <img src={phone.imgUrl} alt={`Phone ${phone.brand} ${phone.model}`}/>
        </div>
        }
      </div>
      <MobilePhone phoneData={ phoneData } />
    </Layout>
  );
};

export default PhoneDetailPage;