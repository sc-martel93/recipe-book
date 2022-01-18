import React from "react";

const Registration = () => {
  return (
    <div className="h-screen flex mt-52">
      <form className="mx-auto flex flex-col w-2/3 max-w-lg">
        <div className="mt-2 flex justify-evenly flex-col">
          <label>Username</label>
          <input
            type="text"
            name="username"
            className="rounded px-2 py-1.5 outline-none hover:bg-cyan-200 focus:bg-cyan-200"
            required
          />
        </div>
        <div className="mt-2 flex justify-evenly flex-col">
          <label>Password </label>
          <input
            type="password"
            name="password"
            className="rounded px-2 py-1.5 outline-none hover:bg-cyan-200 focus:bg-cyan-200"
            required
          />
        </div>
        <div className="mt-2 flex flex-col justify-evenly">
          <label>Password </label>
          <input
            type="password"
            name="password"
            className="rounded px-2 py-1.5 outline-none hover:bg-cyan-200 focus:bg-cyan-200"
            required
          />
        </div>
        <button className="outline-none bg-slate-300 hover:bg-cyan-400 focus:bg-cyan-400 transition-colors font-bold rounded px-5 py-1.5 my-3 w-full mx-auto">
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
