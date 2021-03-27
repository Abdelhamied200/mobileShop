import React from "react";
import Navbar from "../../components/navbar";
import Table from "../../components/table";
import SearchForm from "../../containers/searchForm";

const Home = (props) => {
  return (
    <div className="page">
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <Navbar />
              <SearchForm />
              <Table heads={["brand", "model", "year"]}></Table>
            </div>
            <div className="col-lg-4 col-md-12">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
