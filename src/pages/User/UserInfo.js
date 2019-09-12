import React, { useContext, useState } from "react";
import { AuthContext } from "../../auth";

const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName);

  const onChangeForm = evt => {
    setNewDisplayName(evt.target.value);
  };

  const save = () => {
    if (newDisplayName !== "") {
      user.updateProfile({ displayName: newDisplayName });
      window.location.assign("/");
    }
  };

  return (
    <>
      <input
        className="form-control"
        type="text"
        onChange={onChangeForm}
        name="newDisplayName"
        value={newDisplayName}
      />
      <button className="btn btn-info btn-block mt-2" onClick={save}>
        Save Display name
      </button>
    </>
  );
};

const UserInfo = () => {
  const auth = useContext(AuthContext);

  if (auth.user === null) {
    return null;
  }
  const { displayName } = auth.user;
  const [alternativeDisplayName] = auth.user.email.split("@");
  const dn = displayName || alternativeDisplayName;

  return (
    <>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div className="text-center">
              <p className="alert alert-success">
                <img
                  className="img-circle rounded-circle"
                  src="./usercomment.png"
                  width="70px"
                  height="45px"
                  alt="usercoment"
                />
                Olá {displayName || alternativeDisplayName}
              </p>
              <FormDisplayName displayName={dn} user={auth.user} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserInfo;
