import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";

const url = "https://randomuser.me/api/";
// const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [user, setUser] = useState("");
  const [userValue, setUserValue] = useState("");
  const [userTitle, setUserTitle] = useState("");

  const getUser = async () => {
    const res = await fetch(url);
    const data = await res.json();
    const userData = data.results[0];
    setUser(userData); 
    setUserValue(`${userData.name.first} ${userData.name.last}`);
    setUserTitle("name");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main>
      <div className="block bcg-orange">
        <h1 className="mt-5">Random User</h1>
      </div>
      <div className="block">
        <div className="container">
          <img
            src={user?.picture?.large}
            alt="random user"
            className="user-img"
          />
          <p className="user-title">My {userTitle} is</p>
          <p className="user-value">{userValue}</p>
          <div className="values-list">
            <button
              onMouseOver={() => {
                setUserValue(`${user.name.first} ${user.name.last}`);
                setUserTitle("name");
              }}
              className="icon"
              data-label="name"
            >
              {user.gender === "female" ? (
                <img src={womanSvg} alt="user" id="iconImg" />
              ) : (
                <img src={manSvg} alt="user" id="iconImg" />
              )}
            </button>
            <button
              onMouseOver={() => {
                setUserValue(user.email);
                setUserTitle("email");
              }}
              className="icon"
              data-label="email"
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button
              onMouseOver={() => {
                setUserValue(user.dob.age);
                setUserTitle("age");
              }}
              className="icon"
              data-label="age"
            >
              {user.gender === "female" ? (
                <img src={womanAgeSvg} alt="user" id="iconImg" />
              ) : (
                <img src={manAgeSvg} alt="user" id="iconImg" />
              )}
            </button>
            <button
              onMouseOver={() => {
                setUserValue(user.location.city + "-" + user.location.country);
                setUserTitle("location");
              }}
              className="icon"
              data-label="street"
            >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button
              onMouseOver={() => {
                setUserValue(user.phone);
                setUserTitle("phone");
              }}
              className="icon"
              data-label="phone"
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button
              onMouseOver={() => {
                setUserValue(user.login.password);
                setUserTitle("password");
              }}
              className="icon"
              data-label="password"
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button onClick={getUser} className="btn" type="button">
              new user
            </button>
            <button className="btn" type="button">
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              <tr className="body-tr">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
    </main>
  );
}

export default App;
