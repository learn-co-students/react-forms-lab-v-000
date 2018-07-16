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
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      return;
    }
    this.props.onSubmit;
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input 
              id="test-username" 
              name="username"
              value={this.state.username}
              onChange={this.handleChange} 
              type="text" 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="test-password"
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
