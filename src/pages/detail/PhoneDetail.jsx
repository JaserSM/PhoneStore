import Layout from "../../components/layout/layout";
import MobilePhone from "../../components/mobilePhone/MobilePhone";
import React from "react";

const PhoneDetailPage = ({ phone }) => {
  return (
    <Layout pageName="PhoneDetail">
      <MobilePhone phone={phone} />
    </Layout>
  );
};

export default PhoneDetailPage;