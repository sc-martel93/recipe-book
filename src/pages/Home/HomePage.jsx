import React from "react";
import { Link } from "react-router-dom";

import cake from "../../assets/images/cake.jpg";
import spaghetti from "../../assets/images/spaghetti.jpg";
import vegetables from "../../assets/images/vegetables.jpg";
import salmon from "../../assets/images/salmon.jpg";

const HomePage = () => {
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
          <Link
            to="/login"
            className="outline-none bg-slate-300 hover:bg-orange-400 focus:bg-orange-400 transition-colors font-bold rounded px-5 py-1.5 mx-auto"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="outline-none bg-slate-300 hover:bg-orange-400 focus:bg-orange-400 transition-colors font-bold rounded px-5 py-1.5 mx-auto"
          >
            Register
          </Link>
          <Link
            to="/recipes"
            className="outline-none bg-slate-300 hover:bg-orange-400 focus:bg-orange-400 transition-colors font-bold rounded px-5 py-1.5 mx-auto"
          >
            Explore
          </Link>
        </nav>
      </header>

      <section className="max-w-6xl space-y-5 mx-auto">
        <h3 className="text-xl text-center font-bold mt-5">Desserts!</h3>
        <img src={cake} alt="cake" className="w-5/6 mx-auto" />
        <h3 className="text-xl text-center font-bold">Pasta!</h3>
        <img src={spaghetti} alt="spaghetti" className="w-5/6 mx-auto" />
        <h3 className="text-xl text-center font-bold">Vegetarian!</h3>
        <img src={vegetables} alt="vegetables" className="w-5/6 mx-auto" />
        <h3 className="text-xl text-center font-bold">Seafood!</h3>
        <img src={salmon} alt="salmon" className="w-5/6 mx-auto" />
      </section>

      {/* <footer className="h-60 absolute inset-x-0 bottom-0 bg-emerald-700"></footer> */}
    </main>
  );
};

export default HomePage;
