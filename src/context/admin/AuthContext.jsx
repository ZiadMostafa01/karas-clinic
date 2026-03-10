import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // التأكد من حالة تسجيل الدخول عند تحميل التطبيق لأول مرة
  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const savedUser = localStorage.getItem("user") || sessionStorage.getItem("user");

    if (token && savedUser) {
      try {
        // تحويل بيانات المستخدم من نص (String) إلى كائن (Object)
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing user data from storage:", error);
        // في حال وجود خطأ في البيانات المخزنة، يفضل عمل Logout تلقائي
        logout();
      }
    }
    setLoading(false);
  }, []);

  // دالة تسجيل الدخول
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

  // دالة تسجيل الخروج (تم إضافة مسح الـ user هنا)
  const logout = () => {
    // مسح التوكن
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    
    // مسح بيانات المستخدم (هذا ما كان يسبب المشكلة)
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    
    // إعادة تعيين الحالة لـ null
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);