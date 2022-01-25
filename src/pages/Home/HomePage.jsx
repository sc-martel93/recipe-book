import React from "react";
import { Link } from "react-router-dom";

import cake from "../../assets/images/cake.jpg";
import spaghetti from "../../assets/images/spaghetti.jpg";
import vegetables from "../../assets/images/vegetables.jpg";
import salmon from "../../assets/images/salmon.jpg";

const HomePage = () => {
  return (
    <main>
      <section className="bg-emerald-700 shadow-lg shadow-emerald-800 h-72 flex items-center justify-center flex-col">
        <h1 className="text-5xl md:text-6xl lg:text-6xl">
          Recipe <span className="font-semibold text-orange-400">Book</span>
        </h1>
        <div>
          <p className="text-white text-center text-lg pb-7">
            A place to
            <span className="font-semibold text-orange-400"> share </span>
            and <span className="font-semibold text-orange-400">
              explore
            </span>{" "}
            recipes
          </p>
        </div>
      </section>

      <section className="flex justify-evenly max-w-5xl mx-auto space-x-5">
        <img src={cake} alt="cake" className="w-1/4 max-w-3xl" />
        <img src={vegetables} alt="vegetables" className="w-1/4 max-w-3xl" />
        <img src={spaghetti} alt="spaghetti" className="w-1/4 max-w-3xl" />
        <img src={salmon} alt="salmon" className="w-1/4 max-w-3xl" />
      </section>

      <section className="flex justify-around max-w-6xl mx-auto py-20 shadow-lg shadow-emerald-800">
        <Link
          to="/login"
          className="outline-none bg-slate-300 hover:bg-orange-400 focus:bg-orange-400 transition-colors font-bold rounded px-5 py-1.5 my-3 mx-auto"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="outline-none bg-slate-300 hover:bg-orange-400 focus:bg-orange-400 transition-colors font-bold rounded px-5 py-1.5 my-3 mx-auto"
        >
          Register
        </Link>
        <Link
          to="/recipes"
          className="outline-none bg-slate-300 hover:bg-orange-400 focus:bg-orange-400 transition-colors font-bold rounded px-5 py-1.5 my-3 mx-auto"
        >
          Explore
        </Link>
      </section>

      <footer className="h-60 absolute inset-x-0 bottom-0 bg-emerald-700"></footer>
    </main>
  );
};

export default HomePage;
