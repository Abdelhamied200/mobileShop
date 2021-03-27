import React from "react";
import Navbar from "../../components/navbar";
import SearchForm from "../../containers/searchForm";

const Home = (props) => {
  return (
    <div className="page">
      <div className="home">
        <Navbar />
        <SearchForm />
      </div>
    </div>
  );
};

export default Home;
