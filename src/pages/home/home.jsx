import React from "react";
import Layout from "../../components/layout/layout";
import MobilePhoneList from "../../components/mobilePhoneList/MobilePhoneList";
import Search from "../../components/search/Search";

const HomePage = () => {
  return (
    <Layout pageName="Home">
      <Search/>
      <MobilePhoneList />
    </Layout>
  );
};

export default HomePage;