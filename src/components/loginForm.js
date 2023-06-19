import { useState } from "react";


const LoginForm = () => {
  const [username , setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");

  function handleUsernameChange(value){
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
        password : password
      })
    });

    console.log(result);
    const responsBody = await result.json();
    console.log(responsBody);
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

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