import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

const HomePage = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <main>
      <header className="bg-emerald-700 shadow-lg shadow-emerald-800 h-72 flex items-center justify-center flex-col space-y-8">
        <h1 className="text-5xl md:text-6xl lg:text-6xl">
          Recipe <span className="font-semibold text-orange-400">Book</span>
        </h1>
        <section>
          <p className="text-white text-center text-lg pb-7">
            A place to
            <span className="font-semibold text-orange-400"> share </span>
            and <span className="font-semibold text-orange-400">
              explore
            </span>{" "}
            recipes
          </p>
        </section>

        <nav className="flex justify-around mx-auto space-x-5">
          <button
            onClick={() => setLogin(login => !login)}
            className="outline-none bg-slate-300 hover:bg-orange-400 
                    focus:bg-orange-400 transition-colors font-bold 
                      rounded px-5 py-1.5 mx-auto"
          >
            Login
          </button>
          <button
            onClick={() => setRegister(register => !register)}
            className="outline-none bg-slate-300 hover:bg-orange-400 
                    focus:bg-orange-400 transition-colors font-bold 
                      rounded px-5 py-1.5 mx-auto"
          >
            Register
          </button>
        </nav>
      </header>
      { register ? <RegistrationForm /> : null }
      { login ? <LoginForm /> : null }
    </main>
  );
};

export default HomePage;
