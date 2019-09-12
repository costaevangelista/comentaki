import React from "react";
import SignInUser from "../../../pages/Login/SignInUser";
import CreateUser from "../../../pages/Login/CreateUser";

const NavTabContent = props => {
  return (
    <>
      <div className="tab-content" id="nav-tabContent">
        <div
          className={
            props.toggle ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <SignInUser />
        </div>
        <div
          className={
            !props.toggle ? "tab-pane fade show active" : "tab-pane fade"
          }
        >
          <CreateUser />
        </div>
      </div>
    </>
  );
};

export default NavTabContent;
