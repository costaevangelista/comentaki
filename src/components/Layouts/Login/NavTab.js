import React, { useState } from "react";
import NavTabContent from "./NavTabContent";
import NavTabItemLink from "./NavItemLink";

const NavTab = props => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="container">
        <div className="row m-2">
          <span className="col-3 align-self-start" />
          <div className="col-7 align-self-center">
            <div className="card">
              <div className="card-header text-center bg-info">
                <i className="fas fa-user display-4 text-white"></i> <br />
                <span className="text-white font-weight-bolder">
                  {" "}
                  Commenta-Ki
                </span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <NavTabItemLink toggle={toggle} setToggle={setToggle} />

                  <NavTabContent toggle={toggle} setToggle={setToggle} />
                </li>
              </ul>
            </div>
          </div>
          <span className="col-3 align-self-end" />
        </div>
      </div>
    </>
  );
};

export default NavTab;
