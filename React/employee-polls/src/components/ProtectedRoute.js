import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const ProtectedRoute = (props) => {
    const redirectUrl = window.location.href.toString().split(window.location.host)[1];
    return props.loggedIn ? props.children : <Navigate to={`/login?url=${redirectUrl}`}/>;
};

const mapStateToProps = ({authedUser}) => ({
    loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(ProtectedRoute);
