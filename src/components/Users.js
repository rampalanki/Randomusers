import React from "react";
import "./Users.css";

export default function Users() {
  return (
    <div className="Container">
      <div className="header">
        <img className="banner" src="./../public/randomusers.PNG "></img>
        <h1>The future of your business relies on being informed</h1>
        <button>Request a quote</button>
      </div>
      <div className="content">
        <label className="contentLabel">or contect representative below</label>
        <div>
        <img src="https://randomuser.me/api/portraits/women/85.jpg"></img>
        <img src="https://randomuser.me/api/portraits/women/85.jpg"></img>
        <img src="https://randomuser.me/api/portraits/women/85.jpg"></img>
        <img src="https://randomuser.me/api/portraits/women/85.jpg"></img>
        <img src="https://randomuser.me/api/portraits/women/85.jpg"></img>
        <img src="https://randomuser.me/api/portraits/women/85.jpg"></img>
        <img src="https://randomuser.me/api/portraits/women/85.jpg"></img>
        <img src="https://randomuser.me/api/portraits/women/85.jpg"></img>
        </div>
        <button className="contentButton">VIEW MORE ></button>
      </div>
      <div className="table">
        <label>You are viewing:</label>
        <table>
          <tbody>
            <tr>
              <td>Title FirstName LastName</td>
            </tr>
            <tr>
              <td>
                <img src="https://randomuser.me/api/portraits/women/85.jpg"></img>
              </td>
              <td>
                <tr>Username</tr>
                <tr>Address</tr>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>srl@gmail.com</td>
            </tr>
            <tr>
              <td>Phone</td>
              <td>9666311153</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
