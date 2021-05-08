import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ users: data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div style={{ padding: "10px 15px" }}>
        {this.state.users.map((data) => (
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
}

export default UserClass;
