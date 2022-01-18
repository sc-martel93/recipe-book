import React from "react";

const Registration = () => {
  return (
    <div className="h-screen flex mt-52">
      <form className="mx-auto flex flex-col w-2/3 max-w-3xl">
        <div className="mt-2 flex justify-evenly flex-col md:flex-row lg:flex-row">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="rounded px-2 py-1.5"
            required
          />
        </div>
        <div className="mt-2 flex justify-evenly flex-col md:flex-row lg:flex-row">
          <label>Password </label>
          <input
            type="password"
            name="password"
            className="rounded px-2 py-1.5"
            required
          />
        </div>
        <div className="mt-2 flex flex-col md:flex-row lg:flex-row justify-evenly">
          <label>Password </label>
          <input
            type="password"
            name="password"
            className="rounded px-2 py-1.5"
            required
          />
        </div>
        <button className="outline-none bg-slate-300 hover:bg-cyan-400 focus:bg-cyan-400 transition-colors font-bold rounded px-5 py-1.5 my-3 w-full md:w-7/12 lg:w-7/12 mx-auto">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
