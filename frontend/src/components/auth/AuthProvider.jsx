import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLogin, login] = useState(false);
  const doLogin = () => {
    login(true);
  };
  const doLogout = () => {
    login(false);
  };
  return (
    <AuthContext.Provider value={{ isLogin, doLogin, doLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
