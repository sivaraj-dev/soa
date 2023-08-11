import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("un01");
  const [password, setPassword] = useState("p01");

  const onChangeUsername = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

  const onChangePassword = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="unId">Username: </label>
        <input
          name="username"
          type="text"
          id="unId"
          value={username}
          onChange={onChangeUsername}
          placeholder="Enter your username"
        />

        <label htmlFor="pwdId">Password: </label>
        <input
          name="password"
          type="password"
          id="pwdId"
          value={password}
          onChange={onChangePassword}
          placeholder="Enter your password"
        />
      </form>
    </>
  );
};

export default Login;
