import React,{ useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import "./Users.css";

export default function Users() {

  // const [name,setName]=useState({});
  // const [address,setAddress]=useState({});
  // const [email,setEmail]=useState({});
  // const [pictures,setPictures]=useState({});
  const [user,setUser]=useState([]);
  useEffect(()=>{
    getUsers();
},[]);

const getUsers= async ()=>{
  console.log("getuser");
  const response= await fetch(`https://randomuser.me/api/`);
  const data= await response.json();
  console.log("receipeData: ", data.results);
  setUser(data.results);
  // setName(data.results.name);
  // setAddress(data.results.location);
  // setEmail(data.results.email);
  // setPictures(data.results.picture);
};
 console.log("user",user[0].name.first);
// console.log("address",address);
// console.log("email",email);
// console.log("pictures",pictures);
  return (

    <div className="Container">
      <div className="header">
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
              {/* <td colSpan="12" className="tablehead">{name.title} {name.first} {name.last}</td> */}
            </tr>
            <tr>
              <td colSpan="1" rowSpan="2">
                <img src="https://randomuser.me/api/portraits/women/85.jpg"></img>
              </td>
              <td colSpan="1">Username</td>
            </tr>
            <tr>
              <td colSpan="3">Address</td>
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