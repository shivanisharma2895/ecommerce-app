import { useState } from "react";


const LoginForm = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event) => {
    setForm({
      ...form, [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(form.username + ' ' + form.password);
  };

  return (
    <div className="cover">
    <form onSubmit={handleSubmit}>
      <h1 className="lgn"><em>Login</em></h1>
      <div className="name">
        <input id="username" type="text" value={form.username} onChange={handleChange} placeholder="username" />
      </div>
      <div className="password" >
        <input id="password" type="password" value={form.password} onChange={handleChange} placeholder="password" />
      </div>
      <div className="btn">
      <button type="submit">Submit</button>
      </div>
      <p className="text">---Or login using---</p>
      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;