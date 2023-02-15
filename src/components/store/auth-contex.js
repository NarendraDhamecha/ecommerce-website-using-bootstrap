import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: null,
  email: null,
  login: (token, emailId) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email")
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);

  const isLoggedIn = !!token;

  const loginHandler = (token, emailId) => {
    localStorage.setItem("token", token);
    setToken(token);
    const replacedEmail = emailId.replace(/[^a-zA-Z0-9 ]/g, '')
    localStorage.setItem("email",replacedEmail)
    setEmail(replacedEmail)
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
    setEmail(null);
  };

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    email: email,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
