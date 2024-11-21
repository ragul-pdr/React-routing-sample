import React from "react";
import "../App.css";
import '../Styles/Home.css'
import HeaderBar from "./HeaderBar";
import SideNavBar from "./SideNavBar";

const Home = () => {
  return (
    <div className="homePage">
       <div className="row">
        <HeaderBar />
      </div>

      <nav className="row">
        <div className="col-2">
          <SideNavBar />
        </div>
        <div className="col-10">
          <h2>This is Home Page</h2>
        </div>
      </nav>
    </div>
  );
};

export default Home;
