import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";

import { loginUser } from "../../api/fetching";
import logo from "../../assets/no bg putih.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const setTimeOutMessage = (time) => {
    return setTimeout(() => {
      setAlertMessage("");
    }, time);
  };

  const handleLogin = async () => {
    try {
      if (!password && !email) {
        setTimeOutMessage(2000);
        return setAlertMessage("Harap masukkan email dan password");
      } else if (!email.includes("@")) {
        setTimeOutMessage(2000);
        return setAlertMessage("Harap sertakan @ pada email anda");
      } else if (!email) {
        setTimeOutMessage(2000);
        return setAlertMessage("Harap masukkan email");
      } else if (!password) {
        setTimeOutMessage(2000);
        return setAlertMessage("Harap masukkan password");
      }
      await loginUser(email, password, "admin");
      navigate("/dashboard");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setAlertMessage(err.response.data.message);
        setTimeOutMessage(2000);
        return;
      }
    }
  };

  const handleButtonClick = () => {
    handleLogin();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="flex h-full">
      <div className="absolute items-center hidden h-screen bg-indigo-700 lg:w-2/6 lg:py-48 lg:px-16 xl:px-28 xl:py-60 md:hidden lg:block lg:relative md:absolute -z-50">
        <img className="" src={logo} alt="icon" />
      </div>
      <div className="absolute px-20 -mt-5 md:-mt-20 md:px-44 lg:hidden">
        <img src={logo} alt="icon" className="" />
      </div>
      <div className="w-full h-screen px-10 py-48 bg-indigo-700 lg:w-4/6 md:px-44 md:py-60 lg:py-44 lg:px-36 xl:px-64 xl:py-64 md:bg-indigo-700 lg:bg-white">
        <h1 className="flex justify-center text-2xl font-extrabold text-white lg:text-indigo-700 lg:mb-4 md:text-white font-montserrat">
          Login
        </h1>
        <div className="">
          <div className="relative mb-4">
            <label className="text-sm text-white font-montserrat lg:text-black md:text-white">
              Email
            </label>
            <input
              onKeyDown={handleKeyPress}
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 w-full px-4 mt-1 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-700 shadow-sm appearance-none font-montserrat rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Contoh:jhoneDoe@gmail.com"
              required
            />
          </div>
          <div className="relative">
            <div className="flex items-center justify-between mb-1">
              <label className="text-sm text-white font-montserrat lg:text-black md:text-white">
                Password
              </label>
              <Link
                className="text-sm text-black font-montserrat lg:text-indigo-700 md:text-black "
                to={"/reset-password"}
              >
                Lupa Kata Sandi
              </Link>
            </div>

            <input
              onKeyDown={handleKeyPress}
              type={showPassword ? "text" : "password"}
              id="with-indications"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-700 shadow-sm appearance-none rounded-2xl focus:outline-none focus:ring-2 font-montserrat focus:ring-primary focus:border-transparent"
              name="password"
              placeholder="Masukkan password"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pt-5 pr-4 ">
              {showPassword ? (
                <FiEye
                  onClick={togglePasswordVisibility}
                  className="text-gray-700"
                />
              ) : (
                <FiEyeOff
                  onClick={togglePasswordVisibility}
                  className="text-gray-700"
                />
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={handleButtonClick}
            className="text-white w-full font-montserrat mt-5 lg:bg-indigo-700 md:bg-black bg-black  font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2"
          >
            Masuk
          </button>
        </div>
        {alertMessage && (
          <div className="flex justify-center items-center w-3/4 md:w-1/2  mx-auto  mt-10 text-sm  text-white bg-[#FF0000] rounded-lg py-3  font-montserrat">
            <span className="inline-block">{alertMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
