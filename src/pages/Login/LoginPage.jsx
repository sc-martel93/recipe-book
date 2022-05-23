import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../state/actions/users"

const LoginPage = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

const handleLogin = (e) => {
  e.preventDefault();

  const userInfo = {username: username, password: password};
  dispatch(loginUser(userInfo))
    .then((result) =>
    {
      if(result.data.status === "ok")
      {
        console.log("logged in");
        setToken(result.data.token);
        setIsLoggedIn(true);
        setIsError(false);
        setErrorMessage("")
        return;
      }
      else
      {
        setIsError(true);
        setErrorMessage(result.data.message)
        console.log(result.data.message)
      }
    })
    .catch((error) => 
    {
      console.log(error);
      throw error;
    })

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

      <form
        onSubmit={e => handleLogin(e)}
        className="mx-auto flex flex-col w-2/3 max-w-lg space-y-7 bg-emerald-800 py-5 px-5 my-10 rounded"
        >
        <section className="flex justify-evenly flex-col">
          { isError ? 
              <p className="text-orange-400 text-center">{errorMessage}</p> 
            : null 
          }
          <label className="text-white pt-5">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="rounded px-2 py-1.5 outline-none hover:bg-orange-200 focus:bg-orange-200"
            required
          />
        </section>

        <section className="flex justify-evenly flex-col">
          <label className="text-white">Password </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="rounded px-2 py-1.5 outline-none hover:bg-orange-200 focus:bg-orange-200"
            required
          />
        </section>

        <button
          type="submit"
          className="outline-none bg-slate-300 hover:bg-orange-400 focus:bg-orange-400 transition-colors font-bold rounded px-5 py-1.5 my-3 w-full mx-auto"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginPage;
