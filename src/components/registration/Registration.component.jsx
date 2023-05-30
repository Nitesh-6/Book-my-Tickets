import { useState } from "react";
import "./register.style.css";
import data from "../../../users.json";
import { useDispatch, useSelector } from "react-redux";
import { registerSubmit } from "../redux/todoSclice";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const users = useSelector((state) => state.todo.users);

  console.log(users);
  
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("testvalue:::::::::::>",dispatch(registerSubmit({email, password, name})));
    if(dispatch(registerSubmit({email, password, name}))){
      setIsRegistered(true);
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="registerForm">
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          type="text"
          placeholder="full name"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          placeholder="yourmail@gmail.com"
          id="email"
          name="mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {
        isRegistered ? (<button onClick={() => props.onFormSwitch("Login")}>
        Already have an account? Login here
      </button>):null
      }
      
    </div>
  );
};

export default Register;
