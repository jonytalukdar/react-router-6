import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  isLogin: false,
  login: (token) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState('');

  const isLogin = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
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
