import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  filledInForm = (event) => {
    event.preventDefault()
    // console.log(filled in form", this.state)
    if (this.state.username !== "" && this.state.password !== "") {
    this.props.handleLogin(this.state)
    console.log("im being submitted!!")
    }
    alert("Cant be blank please try again!");
        console.log("Cant be blank")
  }


  render() {
    return (
      <form onSubmit= {this.filledInForm}>
        <div>
          <label>
            Username
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={event => this.handleInputChange(event)}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              value={this.state.password}
              onChange={event => this.handleInputChange(event)}
              name="password"
              type="password"
              />
          </label>
        </div>
        <div>
          <button type="submit">
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
