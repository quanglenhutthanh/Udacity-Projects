import { connect } from "react-redux";
import { handleLogin } from "../actions/authedUser";
import { useState } from "react";
import { Navigate } from "react-router-dom";
const Login = (props) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
        
    if(props.loggedIn){
      const urlParams = new URLSearchParams(window.location.search);
      const redirectUrl = urlParams.get('url');
      return <Navigate to={redirectUrl ? redirectUrl : "/"}/>
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch(handleLogin(username, password));
        setUsername("");
        setPassword("");
    };

    const onUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
    }
    const onPasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
    }
  return (
    <div styles="align-items: center;">
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              data-testid="username"
              placeholder="Enter your username"
              onChange={onUsernameChange}
              value={username}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              data-testid="password"
              placeholder="Enter your password"
              onChange={onPasswordChange}
              value={password}
            />
          </div>

          <button type="submit" data-testid="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
    authedUser,
});

export default connect(mapStateToProps)(Login);
