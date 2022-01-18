import React from "react";

const Registration = () => {
  return (
    <div>
      <form className="container mx-auto flex flex-col w-2/3 items-center">
        <div className="mt-2">
          <label>Username</label>
          <input type="text" name="username" />
        </div>
        <div className="mt-2">
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Registration;
