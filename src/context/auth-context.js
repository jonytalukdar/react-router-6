import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  isLogin: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const isLogin = !!token;

  const loginHandler = (token) => {
    localStorage.setItem('token', token);
    setToken(token);
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    setToken('');
  };

  const contextValue = {
    token: token,
    isLogin: isLogin,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
