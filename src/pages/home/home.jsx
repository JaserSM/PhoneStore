import React from "react";
import Layout from "../../components/layout/layout";
import MobilePhoneList from "../../components/mobilePhoneList/MobilePhoneList";

const HomePage = () => {
  return (
    <Layout pageName="Home">
      <MobilePhoneList />
    </Layout>
  );
};

export default HomePage;