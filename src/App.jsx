import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./components/login/Login.component";
import Register from "./components/registration/Registration.component";


function App() {
  const [currentForm, setCurrentForm] = useState("Login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      {currentForm === "Login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
}

export default App;
