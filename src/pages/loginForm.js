import { useState, useEffect } from "react";
import ProductList from "./productList";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [authenticated, setauthenticated] = useState(localStorage.getItem("token") || false);

  useEffect(() => {
    if (authenticated) {
      navigate("/product");
    }
  }, []);

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
    const status = result.status

    if (status === 200) {
      // user is authenticated
      const body = await result.json();
      localStorage.setItem("token", body.token);
      navigate("/product");
    }
  }

  return (
    <div className="cover">
      <h1 className="lgn"><em>Login</em></h1>
      <div className="name">
        <input id="username" type="text" value={username} onChange={(e) => handleUsernameChange(e.target.value)} placeholder=" enter username" />
      </div>
      <div className="password" >
        <input id="password" type="password" value={password} onChange={(e) => handlePasswordChange(e.target.value)} placeholder=" enter password" />
      </div>
      <div className="btn">
        <button onClick={() => onLogin()}>Login</button>
        {/* <button type="submit">Login</button> */}
      </div>
    </div>
  );
}


export default LoginForm;