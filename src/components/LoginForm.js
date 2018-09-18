import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = { username: "", password: ""};
  }

  handleFormChange = (event) => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.onSubmit(this.state)
    }
  }


  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleFormChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleFormChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
