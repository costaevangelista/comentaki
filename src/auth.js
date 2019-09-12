import React, { useState, useEffect } from "react";
import firebase from "./firebase";

export const AuthContext = React.createContext();

const useGetUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return user;
};

const useCreateUser = () => {
  const [state, setState] = useState({
    error: "",
    success: ""
  });

  const createUser = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (user) {
          setState({
            ...state,
            success: "Ok"
          });
        }
      })
      .catch(e => {
        setState({
          ...state,
          error: e.message
        });
      });
  };
  return [state, createUser];
};

const useSignInUser = () => {
  const [state, setState] = useState({
    error: "",
    success: ""
  });

  const signInUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(e => {
        setState({
          ...state,
          error: e.message
        });
      });
  };
  return [state, signInUser];
};

const useSingout = () => {
  const singout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signout");
      })
      .catch(e => {
        console.log("errr", e);
      });
  };

  return singout;
};

export const AuthProvider = ({ children }) => {
  const user = useGetUser();
  const [useCreateState, createUser] = useCreateUser();
  const [signInUserState, signInUser] = useSignInUser();
  return (
    <AuthContext.Provider
      value={{
        user,
        createUser: { useCreateState, createUser },
        signInUser: { signInUserState, signInUser },
        useSingout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
