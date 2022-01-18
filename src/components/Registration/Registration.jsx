import React from "react";

const Registration = () => {
  return (
    <div className="h-screen flex mt-52">
      <form className="mx-auto flex flex-col items-center w-2/3 max-w-3xl">
        <div className="mt-2 flex justify-evenly flex-col md:flex-row lg:flex-row">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="w-3/5 rounded px-2 py-1.5"
            required
          />
        </div>
        <div className="mt-2 flex justify-evenly flex-col md:flex-row lg:flex-row">
          <label>Password </label>
          <input
            type="password"
            name="password"
            className="w-3/5 rounded px-2 py-1.5"
            required
          />
        </div>
        <div className="mt-2 flex flex-col md:flex-row lg:flex-row justify-evenly">
          <label>Password </label>
          <input
            type="password"
            name="password"
            className="w-3/5 rounded px-2 py-1.5"
            required
          />
        </div>
        <button className="outline-none bg-slate-300 hover:bg-cyan-400 focus:bg-cyan-400 transition-colors font-bold rounded px-5 py-1.5 my-3">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
