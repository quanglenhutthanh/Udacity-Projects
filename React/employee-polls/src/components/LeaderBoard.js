import { connect } from "react-redux";

const LeaderBoard = (props) => {
  return (
    <div className="container" data-testid="my-table">
      <h1>Leaderboard</h1>

      <table className="table">
        <thead>
          <tr>
            <th className=""></th>
            <th className="">User</th>
            <th className="">Answered</th>
            <th className="">Created</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr>
              <td><img src={user.avatarURL} alt="avatar" width="48px"></img></td>
              <td>{user.name}</td>
              <td>{Object.keys(user.answers).length}</td>
              <td>{user.questions.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = ({ authedUser, users }) => {
  const usersList = Object.values(users);
  const sortedUsers = usersList.sort((a, b) => {
    const sumA = Object.keys(a.answers).length + a.questions.length;
    const sumB = Object.keys(b.answers).length + b.questions.length;

    return sumB - sumA; // Sort in descending order
  });
  return {
    authedUser,
    users: sortedUsers,
  };
};

export default connect(mapStateToProps)(LeaderBoard);
