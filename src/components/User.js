import React from 'react';
import "./Users.css";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            UserDetails: []
        };
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/').then((response)=> response.json())
    .then((res)=>{
      
      console.log("results",res.results);
      this.setState({ UserDetails: res.results });
    })
    }

    render() {
        console.log("userlist",this.state.UserDetails);
        let UserTitle=this.state.UserDetails.name.title;
    let UserFirstname=this.state.UserDetails.name.first;
    let UserLastname=this.state.UserDetails.name.last;
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
                    <td colSpan="12" className="tablehead">Title FirstName LastName</td>
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
}

export default User;
