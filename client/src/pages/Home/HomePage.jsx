import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

import cake from "../../assets/images/cake.jpg";
import spaghetti from "../../assets/images/spaghetti.jpg";
import vegetables from "../../assets/images/vegetables.jpg";
import salmon from "../../assets/images/salmon.jpg";

const HomePage = () => {
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
    <main>
      <header className="bg-blue-900 shadow-lg shadow-slate-600 h-72 flex items-center justify-center flex-col space-y-8">
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

        <nav className="flex justify-evenly mx-auto lg:w-7/12 md:w-7/12 w-full">
          <button
            onClick={handleLogin}
            className="outline-none bg-slate-300 hover:bg-yellow-400 
                    focus:bg-yellow-400 transition-colors font-bold 
                      rounded px-5 py-1.5 mx-auto w-1/3 min-w-fit"
          >
            Login
          </button>
          <button
            onClick={handleRegister}
            className="outline-none bg-slate-300 hover:bg-yellow-400 
                    focus:bg-yellow-400 transition-colors font-bold 
                      rounded px-5 py-1.5 mx-auto w-1/3 min-w-fit"
          >
            Register
          </button>
        </nav>
      </header>
      { register ? <RegistrationForm handleLogin={handleLogin}/> : null }
      { login ? <LoginForm /> : null }
      
      <section className="max-w-6xl space-y-5 mx-auto">
        <h3 h3 className="text-xl text-center font-bold mt-5">Desserts!</h3>

        <img src={cake} alt="cake" className="w-5/6 mx-auto" />
        <h3 className="text-xl text-center font-bold">Pasta!</h3>
        <img src={spaghetti} alt="spaghetti" className="w-5/6 mx-auto" />

        <h3 className="text-xl text-center font-bold">Vegetarian!</h3>
        <img src={vegetables} alt="vegetables" className="w-5/6 mx-auto" />

        <h3 className="text-xl text-center font-bold">Seafood!</h3>
        <img src={salmon} alt="salmon" className="w-5/6 mx-auto" />
      </section>
      
    </main>
  );
};

export default HomePage;
