import { useState, useRef, useEffect } from "react";
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

  // Focus username input on mount
  useEffect(() => {
    nameInput.current.focus();
  }, [])

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

// Save user data to local storage if logged in
useEffect(() => {
  if(user.isLoggedIn)
    window.localStorage.setItem("RECIPE_USER", JSON.stringify(user));
}, [user])

  return (
      <form
        onSubmit={e => handleLogin(e)}
        className="mx-auto flex flex-col w-4/5 max-w-lg space-y-7 
                bg-primary pt-5 pb-10 px-5 my-10 rounded shadow-xl
                shadow-slate-600"
      >
        <section className="flex justify-evenly flex-col">
          { error &&
              <p className="text-red-500 text-center">{error}</p> 
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
            maxLength="40"
            autoComplete="on"
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
            maxLength="40"
            autoComplete="on"
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