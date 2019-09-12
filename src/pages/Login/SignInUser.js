import React, { useContext, useState } from "react";
import { AuthContext } from "../../auth";

const SignInUser = () => {
  const auth = useContext(AuthContext);

  const [formLogin, setFormLogin] = useState({
    email: "",
    passwd: ""
  });

  const onChangeForm = evt => {
    setFormLogin({
      ...formLogin,
      [evt.target.name]: evt.target.value
    });
  };

  const save = () => {
    if (formLogin.email !== "" && formLogin.passwd !== "") {
      try {
        auth.signInUser.signInUser(formLogin.email, formLogin.passwd);
      } catch (error) {}
    }
  };

  if (auth.user !== null) {
    return null;
  }
  return (
    <>
      {auth.signInUser.signInUserState.error !== "" && (
        <p className="text-danger">
          {JSON.stringify(auth.signInUser.signInUserState.error)}
        </p>
      )}
      <div className="form-group mt-2">
        <input
          className="form-control form-control-lg"
          type="email"
          value={formLogin.email}
          name="email"
          placeholder="E-mail"
          onChange={onChangeForm}
        />
        <input
          className="form-control form-control-lg mt-2"
          type="password"
          value={formLogin.password}
          name="passwd"
          placeholder="password"
          onChange={onChangeForm}
        />{" "}
        <button className="btn btn-block btn-info btn-lg mt-2" onClick={save}>
          Entrar
        </button>
      </div>
    </>
  );
};

export default SignInUser;
