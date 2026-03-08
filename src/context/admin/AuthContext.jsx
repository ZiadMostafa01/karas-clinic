import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      setUser({
        name: "Ziad Mostafa",
        role: "admin",
        email: "admin@karas.com",
      });
    }
    setLoading(false);
  }, []);


  const login = (token, rememberMe, userData) => {
    if (rememberMe) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(userData)); 
    } else {
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("user", JSON.stringify(userData));
    }
    setUser(userData); 
  };

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    const savedUser =
      localStorage.getItem("user") || sessionStorage.getItem("user");

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
