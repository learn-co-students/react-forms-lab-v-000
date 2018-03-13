import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: 'username',
      password: 'password'
    };
  }

  handleInputChange = (e)=> {
    this.setState({
      [e.target.id.split('-')[1]]: e.target.value
    })
  }

  handleSubmit = (e)=> {
    if (this.state.username != '' && this.state.password != '') {
      this.props.onSubmit();
      e.preventDefault();
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleInputChange} />
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
