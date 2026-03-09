import React, { useState } from "react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useAuth } from "../../../context/admin/AuthContext";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../../config/api";
import logo from "@/assets/images/Logo_main_light.png";
import logoDark from "@/assets/images/Logo_main.png";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        login(data.token, rememberMe, data.user);
        navigate("/admin");
      } else {
        alert("Invalid email or password!");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Could not connect to server!");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[var(--karas_paper)] p-4 font-sans">
      <div className="flex w-full max-w-[1100px] h-[650px] bg-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-500">
        <div className="hidden lg:flex lg:w-1/2 bg-[var(--karas_aubergine)] p-12 flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--karas_aubergine_ink)] rounded-full -mr-32 -mt-32 opacity-50" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--karas_aubergine_ink)] rounded-full -ml-32 -mb-32 opacity-50" />
          <div className="relative z-10">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
              <img src={logo} alt="" />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
          <div className="max-w-md mx-auto w-full">
            <img
              src={logoDark}
              className="lg:hidden pb-6 w-60 mx-auto"
              alt=""
            />
            <h3 className="text-3xl font-bold text-[var(--karas_aubergine)] mb-2 tracking-tight">
              Welcome Back
            </h3>
            <p className="text-[var(--karas_text)] mb-8">
              Please enter your credentials to sign in.
            </p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>
                <div className="relative">
                  <Mail
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@karas.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--karas_aubergine)] focus:ring-2 focus:ring-[var(--karas_aubergine)]/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-semibold text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs text-[var(--karas_aubergine)] hover:underline font-bold"
                  >
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--karas_aubergine)] focus:ring-2 focus:ring-[var(--karas_aubergine)]/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 py-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-[var(--karas_aubergine)] focus:ring-[var(--karas_aubergine)] cursor-pointer"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-600 cursor-pointer select-none"
                >
                  Remember me for 30 days
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--karas_aubergine)] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[var(--karas_aubergine_ink)] transition-all transform active:scale-[0.98] shadow-lg shadow-purple-900/20"
              >
                Sign In
                <ArrowRight size={18} />
              </button>
            </form>

            <p className="text-center mt-8 text-sm text-gray-500">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-[var(--karas_aubergine)] font-bold hover:underline"
              >
                Contact Admin
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
