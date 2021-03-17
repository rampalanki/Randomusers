import React, { useState, useEffect } from "react";
import "./Users.css";
import commonUtils from "../utils/ApiCalls.js";
import User from "./User"

export default function Users() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    commonUtils.getUsers().then((response) => {
      setUsers(response.results);
    });
  }, []);

  const previewUser=(user)=>{
    setUser(user)
  }

  return (
    <div className="Container">
      <div className="header">
        <h1>The future of your business relies on being informed</h1>
        <button>Request a quote</button>
      </div>
      <div className="content">
        <label className="contentLabel">or contect representative below</label>
        {users && users.length
          ? users.map((user,index) => {
              return (
                <div key={index}>
                  <img alt="profile" src={user.picture.thumbnail} onClick={()=>previewUser(user)} />
                </div>
              );
            })
          : null}
        <button className="contentButton">{"VIEW MORE >"}</button>
        {
          Object.keys(user).length>0 && <User user={user}/>
        }
      </div>
    </div>
  );
}
