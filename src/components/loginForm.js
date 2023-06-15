import {useState} from "react";


const LoginForm = () => {
    const [form, setForm] = useState({
        username: '',
        password: '',
    }) ;

    const handleChange = (event) => {
        setForm ({
            ...form,[event.target.id] : event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(form.username + ' ' + form.password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
          <div>
            <label htmlFor="username"></label>
            <input id="username" type="text" value={form.username} onChange={handleChange} placeholder="username"/>
          </div>
          <div>
            <label htmlFor="password"></label>
            <input id="password" type="password" value={form.password} onChange={handleChange} placeholder="password"/>
          </div>
          <button type="submit">Submit</button>
        </form>
    );
 };

 export default LoginForm;