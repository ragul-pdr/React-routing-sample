import React from "react";
import HeaderBar from "./HeaderBar";
import "../App.css";
import '../Styles/ActivePlan.css';
import SideNavBar from "./SideNavBar";
import b1 from "../Images/benz.jpeg";
import b2 from "../Images/itachi.png";
import b3 from "../Images/newj.jpg";
import b4 from "../Images/supra.jpg";

const ActivePlans = () => {
  return (
    <div className="homePage">
      <div className="row">
        <HeaderBar />
      </div>
      <nav className="row">
        <div className="col-2">
          <SideNavBar />
        </div>
      </nav>

      <div className="col-10 activeplan">
        <div className="row">
          <h2>This is Active Plan Page</h2>
        </div>

        <div className="row">
          <div className="col-3">
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
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={b4} alt="Card image cap" />
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
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={b2} alt="Card image cap" />
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
          <div className="col-3">
            <div className="card" style={{ width: "18rem" }}>
              <img className="card-img-top" src={b3} alt="Card image cap" />
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
        </div>
      </div>
    </div>
  );
};

export default ActivePlans;
