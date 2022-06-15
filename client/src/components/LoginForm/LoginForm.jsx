import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../state/actions/users"

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const nameInput = useRef(null);

const handleLogin = (e) => {
  e.preventDefault();

  const userInfo = {username: username, password: password};
  dispatch(loginUser(userInfo))
    .then((result) =>
    {
      if(result.message === "Network Error")
        setError(`${result.message}, please try again later.`);

      if(result.status === "ok")
      {
        window.localStorage.setItem("RECIPE_USER", JSON.stringify(user));
        navigate("/recipes");    
      }
        
      if(result.status === "error")
      {
        setError(result.message);
        nameInput.current.focus();
        setPassword("");
      }
    })
    .catch((error) => 
    {
      console.log(error);
      throw error;
    })
}

  return (
      <form
        onSubmit={e => handleLogin(e)}
        className="mx-auto flex flex-col w-4/5 max-w-lg space-y-7 
                bg-blue-900 pt-5 pb-10 px-5 my-10 rounded shadow-xl
                shadow-slate-600"
      >
        <section className="flex justify-evenly flex-col">
          { error &&
              <p className="text-yellow-400 text-center">{error}</p> 
          }
          <label className="text-white pt-5">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            ref={nameInput}
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="rounded px-2 py-1.5 outline-none hover:bg-yellow-200 focus:bg-yellow-200"
            required
            minLength="4"
            maxLength="40"
          />
        </section>

        <section className="flex justify-evenly flex-col">
          <label className="text-white">Password </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="rounded px-2 py-1.5 outline-none hover:bg-yellow-200 focus:bg-yellow-200"
            required
            minLength="8"
            maxLength="40"
          />
        </section>
      <button
        type="submit"
        className="outline-none bg-slate-300 hover:bg-yellow-400 focus:bg-yellow-400 transition-colors font-bold rounded px-5 py-1.5 my-3 w-full mx-auto"
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm