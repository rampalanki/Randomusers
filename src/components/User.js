import React from "react";
import "./Users.css";
const User = (props) => {
  const { user } = props;
  return (
    <div className="table">
      <label>You are viewing:</label>
      <table>
        <tbody>
          <tr></tr>
          <tr>
            <td colSpan="1" rowSpan="2">
              <img alt="profile" src={user.picture.thumbnail}></img>
            </td>
            <td colSpan="1">{`${user.login.username}`}</td>
          </tr>
          <tr>
            <td colSpan="3">{`${user.location.state}, ${user.location.country}`}</td>
          </tr>
          <tr>
            <td colSpan="1">Email</td>
            <td colSpan="3">{user.email}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td colSpan="3">{user.cell}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
