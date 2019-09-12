import React from "react";

const NavTabItemLink = props => {
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <div
            className={
              props.toggle
                ? "nav-item nav-link bg-light active font-weight-bolder"
                : "nav-item nav-link "
            }
            aria-selected={props.toggle}
            onClick={() => props.setToggle(!props.toggle)}
          >
            Entrar na conta
          </div>
          <div
            className={
              !props.toggle
                ? "nav-item nav-link bg-light active font-weight-bolder"
                : "nav-item nav-link"
            }
            aria-selected={!props.toggle}
            onClick={() => props.setToggle(!props.toggle)}
          >
            Criar Conta
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavTabItemLink;
