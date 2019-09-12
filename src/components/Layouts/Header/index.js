import React, { useContext } from "react";
import { AuthContext } from "../../../auth";

import "./styles.css";

import { Link } from "react-router-dom";
const Header = () => {
  const auth = useContext(AuthContext);

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand text-white font-weight-bolder">
          <i className="fas fa-bookmark m-4"></i> Commenta-Ki
        </Link>
        {auth.user !== null && (
          <li className="form-inline my-2 my-lg-3">
            <button
              className="btn btn-link-primary text-white font-weight-bolder my-2 my-sm-0"
              type="button"
              onClick={auth.useSingout()}
            >
              Sair
            </button>
          </li>
        )}
      </div>
    </nav>
  );
};

export default Header;
