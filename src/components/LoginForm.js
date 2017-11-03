import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    }
  }

  handlePasswordChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: event.target.value
    });
  };

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handleSubmit = (event) => {
    if (this.state.username && this.state.password) {
      this.props.onSubmit({username: this.state.username, password: this.state.password});
    }
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="text" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}



