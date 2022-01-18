import React from "react";

const Registration = () => {
  return (
    <div>
      <form className="mx-auto flex flex-col items-center w-2/3 max-w-3xl">
        <div className="mt-2">
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div className="mt-2">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button className="outline-none bg-slate-300 hover:bg-cyan-400 focus:bg-cyan-400 transition-colors font-bold rounded px-5 py-1.5 my-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
