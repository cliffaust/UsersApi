import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UserFunction() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ padding: "10px 15px" }}>
      {users.map((data) => (
        <div
          style={{
            marginBottom: 23,
            backgroundColor: "#f4f4f4",
            padding: "10px 5px",
            borderRadius: "5px",
          }}
          key={data.id}
        >
          <p>
            <b>Name:</b> {data.name}
          </p>
          <p>
            <b>Username:</b> {data.username}
          </p>
          <p>
            <b>Email:</b> {data.email}
          </p>
        </div>
      ))}
    </div>
  );
}

export default UserFunction;
