import { useState } from "react";
import "./login.style.css";
import MoviesList from "../../components/movies list/MoviesList.components";
import { useSelector,useDispatch } from "react-redux";
import { loggedInUser } from "../redux/todoSclice";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const users = useSelector((state) => state.todo.users);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email);
    if (user && user.password === inputPassword) {
      setLoggedIn(true);
      dispatch(loggedInUser(user))

    } else {
      alert("Invalid email or password");
    }
  };

  if (loggedIn) {
    return <MoviesList />;
  }

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="loginForm">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          placeholder="yourmail@gmail.com"
          id="email"
          name="mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="inputPassword">Password</label>
        <input
          value={inputPassword}
          type="password"
          placeholder="*********"
          id="inputPassword"
          name="inputPassword"
          onChange={(e) => setInputPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => props.onFormSwitch("register")}>
        Don't have an account? Register here
      </button>
    </div>
  );
};

export default Login;
