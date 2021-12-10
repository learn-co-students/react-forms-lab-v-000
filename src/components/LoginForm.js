import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })

  }

  onSubmit = (e) => {
    e.preventDefault();
     return this.state.username && this.state.password ? this.props.handleLogin(this.state) : console.log("a username and password combination are required!!")
  }

  render() {
    return (
      <form onSubmit={ this.onSubmit} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={ this.handleInputChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={ this.handleInputChange} value={this.state.password} />
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
