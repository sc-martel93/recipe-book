import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../state/actions/users";

const RegistrationForm = (props) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCopy, setPasswordCopy] = useState("");

  const [error, setError] = useState(undefined)
  const [isRegistered, setIsRegistered] = useState(false);

  const nameInput = useRef(null);
  const passInput = useRef(null);

  const registerUser = (e) => {
    e.preventDefault();

    if (password !== passwordCopy) {
      setError("Passwords must match!");
      passInput.current.focus();
      return;
    }
    
    const newUser = { username: username, password: password };

    dispatch(createUser(newUser))
      .then((result) => {
        if (result.status === "ok") 
        {
          setIsRegistered(true);
          setUsername("");
          setPassword("");
          setPasswordCopy("");
          return;
        }
        
        // Handle server down
        if (result.message === "Network Error")
          setError("Network Error, Please try again later.");
      
         // Handle if duplicate username
        if (result.message === "Request failed with status code 409")
        {
          setError("Username already in use.")
          nameInput.current.focus();
        }
    })
    
  };

  return (
    <>
      {isRegistered ? (
        <section
          className="mx-auto flex flex-col w-2/3 max-w-lg space-y- 
          bg-blue-900 py-10 px-5 my-10 rounded"
        >
          <p className="text-white text-center text-lg">
            Registration successful! Click to login.
          </p>

          <button
            onClick={() => props.handleLogin()}
            className="outline-none bg-slate-300 hover:bg-yellow-400 
            focus:bg-yellow-400 transition-colors font-bold rounded 
            px-5 py-1.5 my-3 w-full mx-auto text-center mt-12"
          >
            Login
          </button>
        </section>
      ) 
      : (
        <form
          onSubmit={registerUser}
          autoComplete="off"
          className="mx-auto flex flex-col w-4/5 max-w-lg space-y-7 
                  bg-blue-900 pt-5 pb-10 px-5 my-10 rounded shadow-xl
                  shadow-slate-600"
        >
          <section className="flex justify-evenly flex-col">
            {error && (
              <p className="text-yellow-400 text-center">{error}</p>
            )}

            <label className="text-white pt-5">Username</label>
            <input
              ref={nameInput}
              type="text"
              name="username"
              placeholder="Username"
              className="rounded px-2 py-1.5 outline-none hover:bg-yellow-200 focus:bg-yellow-200"
              required
              minLength="4"
              maxLength="40"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </section>

          <section className="flex justify-evenly flex-col">
            <label className="text-white">Password </label>
            <input
              ref={passInput}
              type="password"
              name="password"
              placeholder="Password"
              className="rounded px-2 py-1.5 outline-none hover:bg-yellow-200 focus:bg-yellow-200"
              required
              minLength="8"
              maxLength="40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </section>

          <section className="flex flex-col justify-evenly">
            <label className="text-white">Password </label>
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              className="rounded px-2 py-1.5 outline-none hover:bg-yellow-200 focus:bg-yellow-200"
              required
              minLength="8"
              maxLength="40"
              value={passwordCopy}
              onChange={(e) => setPasswordCopy(e.target.value)}
            />
          </section>

          <button
            type="submit"
            className="outline-none bg-slate-300 hover:bg-yellow-400 
                    focus:bg-yellow-400 transition-colors font-bold rounded 
                      px-5 py-1.5 w-full mx-auto"
          >
            Register
          </button>
        </form>
      )}
      {/*End of conditional */}
    </>
  );
};

export default RegistrationForm;
