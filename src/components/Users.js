import React, { useState, useEffect } from "react";
import "./Users.css";
import commonUtils from "../utils/ApiCalls.js";
import User from "./User"

export default function Users() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [viewmore, setViewmore] = useState(false);

   /**
         * @description fetch data from Randomusers API
         * @returns {Array}
         */
  useEffect(() => {
    commonUtils.getUsers().then((response) => {
      setUsers(response.results);
    });
  }, []);

          /**
         * @param {Array} user User details as array of objects.
         * @returns {Array}
         */
  const previewUser=(user)=>{
    setUser(user)
  }
  
  
  return (
    <div className="Container">
      <div className="header">
        <div className="data">
          <h1>The future of your business relies on being informed</h1>
          <button className="quotebutton">Request a quote</button>
        </div>
      </div>
      <div className="content">
        <label className="contentLabel">or contact representative below</label>
        <div className="thumblayout">
        {users && users.length
        // viewmore flag decides number of thumbnails to be shown
          ? !viewmore ?
          users.slice(0,4).map((user,index) => {
              return (
                <div key={index} >
                  <img alt="profile" className="thumbimage" src={user.picture.thumbnail} onClick={()=>previewUser(user)} />
                </div>
              );
            }) 
            : users.map((user,index) => {
              return (
                <div key={index}>
                  <img alt="profile" className="thumbimage" src={user.picture.thumbnail} onClick={()=>previewUser(user)} />
                </div>
              );
            })
          : null}
          </div>
        <button className="contentButton" onClick={()=>setViewmore(true)}>{"VIEW MORE >"}</button>
        {
          Object.keys(user).length>0 && <User user={user}/>
        }
      </div>
    </div>
  );
}
