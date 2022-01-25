import React from "react";

const Registration = () => {
  return (
    <section className=" bg-emerald-700 mx-10 rounded shadow-lg shadow-emerald-800 py-20">
      <h2 className="text-white text-3xl font-bold text-center pb-10">
        Welcome To Recipe
        <span className="text-orange-400 ">Book</span>
      </h2>
      <p className="text-white text-center text-lg pb-7">
        A place to
        <span className="font-semibold text-orange-400"> share </span>
        and <span className="font-semibold text-orange-400">explore</span>{" "}
        recipes
      </p>
      <p className="text-white text-center text-lg">
        Register <span className="font-semibold text-orange-400">now</span> for{" "}
        <span className="font-semibold text-orange-400">Free!</span>
      </p>

      <form className="mx-auto flex flex-col w-2/3 max-w-lg space-y-7 bg-emerald-800 py-10 px-5 my-10 rounded">
        <section className="flex justify-evenly flex-col">
          <label className="text-white">Username</label>
          <input
            type="text"
            name="username"
            className="rounded px-2 py-1.5 outline-none hover:bg-orange-200 focus:bg-orange-200"
            required
          />
        </section>
        <section className="flex justify-evenly flex-col">
          <label className="text-white">Password </label>
          <input
            type="password"
            name="password"
            className="rounded px-2 py-1.5 outline-none hover:bg-orange-200 focus:bg-orange-200"
            required
          />
        </section>
        <section className="flex flex-col justify-evenly">
          <label className="text-white">Password </label>
          <input
            type="password"
            name="password"
            className="rounded px-2 py-1.5 outline-none hover:bg-orange-200 focus:bg-orange-200"
            required
          />
        </section>
        <button className="outline-none bg-slate-300 hover:bg-orange-400 focus:bg-orange-400 transition-colors font-bold rounded px-5 py-1.5 my-3 w-full mx-auto">
          Register
        </button>
      </form>
    </section>
  );
};

export default Registration;
