import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  username = (event)=> {
    this.setState({
      username: event.target.value
    })
  }
  password = (event)=> {
    this.setState({
      password: event.target.value
    })
  }

  submit = (event)=> {
    event.preventDefault();
    if(this.state.username !== '' && this.state.password !== '') {
      this.props.onSubmit
    }
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input id="test-username"
            type="text"
            value={this.state.username} onChange={this.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
            type="password" value={this.state.password}
            onChange={this.password} />
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
