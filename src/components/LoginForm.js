import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  confirmInput = () => ((this.state.username.length > 0) && (this.state.password.length > 0))

  handleSubmit = event => {
    event.preventDefault()
    if(this.confirmInput()) this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"
            value={this.state.username}
            onChange={this.handleInput}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            value={this.state.password}
            onChange={this.handleInput}
            />
          </label>
        </div>
        <div>
          <button type="submit" disabled={!this.confirmInput()}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
