import React, { useContext } from "react";
import { AuthContext } from "../../auth";

import NavTab from "../../components/Layouts/Login/NavTab";

const Index = () => {
  const auth = useContext(AuthContext);
  if (auth.user !== null) {
    return null;
  }
  return (
    <>
      <NavTab />
    </>
  );
};

export default Index;
