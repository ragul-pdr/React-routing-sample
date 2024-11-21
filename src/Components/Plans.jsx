import React from "react";
import "../App.css";
import HeaderBar from "./HeaderBar";
import SideNavBar from "./SideNavBar";
import b1 from '../Images/b.jpeg'

const Plans = () => {
  return (
    <div className="homePage">
      <div className="row">
        {/* <HeaderBar /> */}
        
      </div>

      <nav className="row">
        <div className="col-2">
          <SideNavBar />
        </div>

        <div className="col-10">
          <h2>This is Plan Page</h2>
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={b1} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Plans;
