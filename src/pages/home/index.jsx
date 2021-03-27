import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Table from "../../components/table";
import AboutPhone from "../../containers/aboutPhone";
import SearchForm from "../../containers/searchForm";

const Home = (props) => {
  const [data, setData] = useState(null);
  const [current, setCurrent] = useState({});
  useEffect(() => {
    let d = JSON.parse(localStorage.getItem("data"));
    console.log(d);
    setData(d);
  }, []);
  return (
    <div className="page">
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <Navbar />
              <SearchForm />
              <Table
                setCurrent={setCurrent}
                heads={["brand", "model", "year"]}
                body={data}
              ></Table>
              <AboutPhone about={current}></AboutPhone>
            </div>
            <div className="col-lg-4 col-md-12">hello</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
