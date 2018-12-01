import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = event => {
    event.preventDefault()
    
    const password = this.state.password
    const username = this.state.username
    if ((username !== '') && (password !== '')) {
      this.props.onSubmit({username}, {password})
    }

  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>
            Username
            <input id="username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange} />
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
