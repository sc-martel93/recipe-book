import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../state/actions/users"

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

const handleLogin = (e) => {
  e.preventDefault();

  const userInfo = {username: username, password: password};
  dispatch(loginUser(userInfo))
    .then((result) =>
    {
      if(result.status === "ok")
      {
        setIsError(false);
        setErrorMessage("")
        navigate("/recipes");
        return;
      }
      else
      {
        setIsError(true);
        setErrorMessage(result.message)
        console.log(result.message)
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
          { isError &&
              <p className="text-yellow-400 text-center">{errorMessage}</p> 
          }
          <label className="text-white pt-5">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="rounded px-2 py-1.5 outline-none hover:bg-yellow-300 focus:bg-yellow-300"
            required
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
            className="rounded px-2 py-1.5 outline-none hover:bg-yellow-300 focus:bg-yellow-300"
            required
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