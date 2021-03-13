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
              <td colSpan="4" className="tablehead">Title FirstName LastName</td>
            </tr>
            <tr>
              <td colSpan="1" rowSpan="2">
                <img src="https://randomuser.me/api/portraits/women/85.jpg"></img>
              </td>
              <td colSpan="7">Username</td>
            </tr>
            <tr>
              <td colSpan="7">Address</td>
            </tr>
            <tr>
              <td colSpan="1">Email</td>
              <td colspan="3">srl@gmail.com</td>
            </tr>
            <tr>
              <td >Phone</td>
              <td colSpan="3">9666311153</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
