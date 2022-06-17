import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, useAuthState, useAuthDispatch } from "../../Context";
import styles from "./login.module.css";




function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  const dispatch = useAuthDispatch();
  let navigate = useNavigate();
  const { errorMessage } = useAuthState(); //lee los valores del loading y errorMessages del contexto

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      let response = await loginUser(dispatch, { email, password });
      if (!response.user) return;
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const loading = (isLoading) ? 'Loading...' : null;

  return (
    <div className={styles.container}>
      <div className={{ width: 200 }}>
        <h1>Login Page</h1>
        { loading }
        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
        <form>
          <div className={styles.loginForm}>
            <div className={styles.loginFormItem}>
              <label htmlFor="email"><b>Username</b></label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className={styles.loginFormItem}>
              <label htmlFor="password"><b>Password</b></label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
          </div>
          <button className="login-button" onClick={handleLogin} disabled={loading}>
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;