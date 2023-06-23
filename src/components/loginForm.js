import { useState } from "react";
import ProductList from "./productList";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ username: "mor_2314", password: "83r5^_" }];
  function handleUsernameChange(value) {
    setUsername(value);
  }

  function handlePasswordChange(value) {
    setPassword(value);
  }

  async function onLogin() {
    const result = await fetch("http://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      }),
      
      
      
    });
    
    console.log(result);
    const responsBody = await result.json();
    console.log(responsBody);
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const account = users.find((user) => user.username === username);
    if(account && account.password === password) {
      setauthenticated(true)
      localStorage.setItem("authenticated", true);
      navigate("/product");
    }

  };

  return (
    <div className="cover">
      <form onSubmit={handleSubmit}>
        <h1 className="lgn"><em>Login</em></h1>
        <div className="name">
          <input id="username" type="text" value={username} onChange={(e) => handleUsernameChange(e.target.value)} placeholder=" enter username" />
        </div>
        <div className="password" >
          <input id="password" type="password" value={password} onChange={(e) => handlePasswordChange(e.target.value)} placeholder=" enter password" />
        </div>
        <div className="btn">
          <button onClick={() => onLogin()}>Login</button>
        </div>

      </form>
    </div>
  );
}


export default LoginForm;