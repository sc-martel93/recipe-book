import React from "react";

const Registration = () => {
  return (
    <div className="h-screen bg-emerald-800 m-10 rounded shadow-lg shadow-emerald-800">
      <h2 className="text-white text-3xl font-bold text-center mt-20 pt-20 pb-10">
        Welcome To Recipe<span className="text-orange-400">Book</span>
      </h2>
      <p className="text-white text-center text-lg pb-5">
        A place to share and explore recipes..
      </p>
      <p className="text-white text-center text-lg">
        Register <span className="text-orange-400">now</span> for{" "}
        <span className="text-orange-400">Free!</span>
      </p>
      <form className="mx-auto flex flex-col w-2/3 max-w-lg mt-20">
        <div className="mt-2 flex justify-evenly flex-col">
          <label className="text-white">Username</label>
          <input
            type="text"
            name="username"
            className="rounded px-2 py-1.5 outline-none hover:bg-orange-200 focus:bg-orange-200"
            required
          />
        </div>
        <div className="mt-2 flex justify-evenly flex-col">
          <label className="text-white">Password </label>
          <input
            type="password"
            name="password"
            className="rounded px-2 py-1.5 outline-none hover:bg-orange-200 focus:bg-orange-200"
            required
          />
        </div>
        <div className="mt-2 flex flex-col justify-evenly">
          <label className="text-white">Password </label>
          <input
            type="password"
            name="password"
            className="rounded px-2 py-1.5 outline-none hover:bg-orange-200 focus:bg-orange-200"
            required
          />
        </div>
        <button className="outline-none bg-slate-300 hover:bg-orange-400 focus:bg-orange-400 transition-colors font-bold rounded px-5 py-1.5 my-3 w-full mx-auto">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
