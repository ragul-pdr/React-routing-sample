import React from "react";
import '../Styles/HeaderBar.css'

const HeaderBar = () => {
  return (
    <div className="HeaderBar">
      
        <h3>React Router </h3>
      
      <div>
        <input className="input p-1 rounded" type="text" placeholder="Search Products..." />
      &nbsp;
        <button className="btn btn-success">Search</button>
      </div>
    </div>
  );
};

export default HeaderBar;
