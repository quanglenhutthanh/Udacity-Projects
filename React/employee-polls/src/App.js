import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Login from "./components/Login";
import Poll from "./components/Poll";
import LeaderBoard from "./components/LeaderBoard";
import NewPoll from "./components/NewPoll";
import Page404 from "./components/Page404";
import ProtectedRoute from "./components/ProtectedRoute";

const App = (props) => {
 
  useEffect(() => {
    props.dispatch(handleInitialData());
  });

  return (
    <div>
      {props.loggedIn && <Nav />}
      <Routes>
        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/questions/:id" element={<ProtectedRoute><Poll/></ProtectedRoute>}/>
        <Route path="/add" element={<ProtectedRoute><NewPoll/></ProtectedRoute>}/>
        <Route path="/leaderboard" element={<ProtectedRoute><LeaderBoard/></ProtectedRoute>} />
        <Route path="/404" element={<ProtectedRoute><Page404/></ProtectedRoute>} />
      </Routes>
    </div>
  );
};

const mapStateToProps = ({authedUser}) => ({
  loggedIn: !!authedUser,
});
export default connect(mapStateToProps)(App);
