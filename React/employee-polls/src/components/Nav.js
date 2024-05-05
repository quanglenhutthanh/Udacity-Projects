import { connect } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLogout } from "../actions/authedUser";

const Nav = (props) => {
  const navigate = useNavigate();

  const logout = (e) => {
    
    e.preventDefault();
    props.dispatch(handleLogout());
    navigate("/");
  };

  return (
    <nav className="nav">
  <ul className="left-ul">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/leaderboard">LeaderBoard</Link>
    </li>
    <li>
      <Link to="/add">New Poll</Link>
    </li>
  </ul>
  <ul className="right-ul">
    <li>
      <Link to="#">
          <img src={props.authedUser.avatarURL} alt="avatar" width="14px" height="14px"/>
          <label className="logged-username">{props.authedUser.id}</label>
      </Link>
    </li>
    <li>
      <Link data-testid="logout" onClick={logout}>Logout</Link>
    </li>
  </ul>
</nav>
  );
};

const mapStateToProps = ({authedUser}) => ({
  authedUser
});
export default connect(mapStateToProps)(Nav);
