import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
    };
  }

  usernameCreated = e => {
    e.preventDefault();

    this.setState({
<<<<<<< HEAD
      username: e.target.value,
    });
=======
      Username: e.target.value,
    });
    // console.log(this.state);
>>>>>>> second-login-page-second-feature-branch
  };

  passwordCreated = e => {
    e.preventDefault();
<<<<<<< HEAD

    this.setState({
      password: e.target.value,
    });

    console.log(this.state)
=======
    console.log(e.target.value);

    this.setState({
      Password: e.target.value,
    });
    console.log(this.state);
>>>>>>> second-login-page-second-feature-branch
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("hello");
    let URL = `https://nom-noms-api.herokuapp.com/user`;
    let localURL = "http://localhost:4000/user";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: { "Content-type": "application/json" },
<<<<<<< HEAD
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
=======
    }).catch(err => console.log(err));
>>>>>>> second-login-page-second-feature-branch
  };

  render() {
    return (
      <div>
        <form
          className={`forms-${this.props.type}`}
          onSubmit={this.handleSubmit}
        >
          {" "}
          <input
            type="text"
            placeholder="Create Username"
            onChange={this.usernameCreated}
          ></input>
          <input
            type="text"
            placeholder="Create Password"
            onChange={this.passwordCreated}
          ></input>
<<<<<<< HEAD
=======
          {/* <Link to="/user"> */}
>>>>>>> second-login-page-second-feature-branch
          <input
            onSubmit={this.handleSubmit}
            type="submit"
            placeholder="submit"
          ></input>
<<<<<<< HEAD
=======
          {/* </Link> */}
>>>>>>> second-login-page-second-feature-branch
        </form>
      </div>
    );
  }
}

export default CreateUser;
