import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }


  changeUser = event => {
    this.setState({
      username: event.target.value
    })
  }

  changePassword = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    const { username, password } = this.state;

    event.preventDefault();
      if(!username || !password){
        return;
      } else {
        this.props.onSubmit({ username, password })
      }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.changeUser} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.changePassword} />
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
