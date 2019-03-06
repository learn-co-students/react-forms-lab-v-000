import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInput = event => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={this.props.onSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
