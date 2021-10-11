import React, { useEffect, useState } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const KEY_LOGGED_IN = 'isLoggedIn';
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    console.log('login');
    localStorage.setItem(KEY_LOGGED_IN, '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem(KEY_LOGGED_IN);
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storedUserLoggedInInformtion = localStorage.getItem(KEY_LOGGED_IN);

    if (storedUserLoggedInInformtion) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
