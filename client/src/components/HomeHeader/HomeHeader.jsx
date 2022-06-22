import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

const HomeHeader = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const handleRegister = () => {
    setRegister(register => !register);

    if(login)
      setLogin(login => !login);
  }

  const handleLogin = () => {
    setLogin(login => !login);

    if(register)
      setRegister(register => !register);
  }

  return (
    <>
      <header className="bg-blue-900 shadow-lg shadow-slate-600 h-96 flex items-center justify-center flex-col space-y-8">
          <h1 className="text-white text-5xl md:text-6xl lg:text-6xl">
            Recipe <span className="font-semibold text-yellow-400">Book</span>
          </h1>
          <section>
            <p className="text-white text-center text-lg pb-7">
              A place to
              <span className="font-semibold text-yellow-400"> share </span>
              and <span className="font-semibold text-yellow-400">
                explore
              </span>{" "}
              recipes
            </p>
          </section>

        <nav className="flex flex-col space-y-5 justify-evenly mx-auto lg:w-1/4 md:w-1/2 w-9/12 h-1/4">
          <button
            onClick={handleLogin}
            className="outline-none bg-slate-300 hover:bg-yellow-400 focus:bg-yellow-400 transition-colors font-bold rounded px-5 py-1.5 mx-auto w-full min-w-fit"
          >
            Login
          </button>
          <button
            onClick={handleRegister}
            className="outline-none bg-slate-300 hover:bg-yellow-400 focus:bg-yellow-400 transition-colors font-bold rounded px-5 py-1.5 mx-auto w-full min-w-fit"
          >
            Register
          </button>
          <button
            onClick={() => navigate("/recipes")}
            className="outline-none bg-slate-300 hover:bg-yellow-400 focus:bg-yellow-400 transition-colors font-bold rounded px-5 py-1.5 mx-auto w-full min-w-fit"
          >
            Explore
          </button>
        </nav>
      </header>
        
        { register ? 
            <RegistrationForm handleLogin={handleLogin}/> : 
          login ? 
            <LoginForm /> 
          : null 
        }
        
    </>
  )
}

export default HomeHeader