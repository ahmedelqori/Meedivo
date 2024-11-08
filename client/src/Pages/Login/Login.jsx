import { LoginForm } from "./Login.style.jsx";
const Login = () => {
  return (
    <main className="container">
      <LoginForm className="login-form" aria-label="Login form">
        <h2>LEET TEST</h2>

        <div className="form-group">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username or email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Sign In
        </button>

        <div className="form-footer">
          <a href="/forgot-password" className="forgot-password">
            Forgot Password?
          </a>
          <a href="/create-account" className="create-account">
            Create Account ?
          </a>
        </div>
      </LoginForm>
    </main>
  );
};

export default Login;
