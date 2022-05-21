import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, fetchUserId } from '../../state/actions/users';

const Registration = () => {
const dispatch = useDispatch();

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [passwordCopy, setPasswordCopy] = useState("");
const [isRegistered, setIsRegistered] = useState(false);

const user = useSelector((state) => state.user);


const registerUser = (e) => {
  e.preventDefault();

  if(password !== passwordCopy) {
    window.alert("Passwords must match!");
    return;
  } 

  let newUser = {name: username, password: password};

  dispatch(createUser(newUser));
  dispatch(fetchUserId(username));
  
  console.log(user)
 // setUsername("");
  // setPassword("");
  // setPasswordCopy("");
}

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

      <form
        onSubmit={registerUser} 
        className="mx-auto flex flex-col w-2/3 max-w-lg space-y-7 
                bg-emerald-800 py-10 px-5 my-10 rounded"
        >
        <section className="flex justify-evenly flex-col">
          <label className="text-white">Username</label>
          <input
            type="text"
            name="username"
            className="rounded px-2 py-1.5 outline-none hover:bg-orange-200 focus:bg-orange-200"
            required
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </section>

        <section className="flex justify-evenly flex-col">
          <label className="text-white">Password </label>
          <input
            type="password"
            name="password"
            className="rounded px-2 py-1.5 outline-none hover:bg-orange-200 focus:bg-orange-200"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </section>

        <section className="flex flex-col justify-evenly">
          <label className="text-white">Password </label>
          <input
            type="password"
            name="password"
            className="rounded px-2 py-1.5 outline-none hover:bg-orange-200 focus:bg-orange-200"
            required
            value={passwordCopy}
            onChange={e => setPasswordCopy(e.target.value)}
          />
        </section>

        <button
          type="submit"
          className="outline-none bg-slate-300 hover:bg-orange-400 
                  focus:bg-orange-400 transition-colors font-bold rounded 
                    px-5 py-1.5 my-3 w-full mx-auto"
          >
          Register
        </button>
      </form>
    </section>
  );
};

export default Registration;
