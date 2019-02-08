import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password:""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    const uLength = this.state.username.length,
          pLength = this.state.password.length;
    
    if (uLength > 0 && pLength > 0) {
      e.preventDefault()
      this.props.onSubmit({
        username: this.state.username,
        password: this.state.password
      })
    }
  }

  render() {
    return (
      <form onSubmit={e => {
                      e.preventDefault()
                      this.handleSubmit(e)
                      }}>
        <div>
          <label>
            Username
            <input id="username"
                   name="username"
                   type="text"
                   value={this.state.username}
                   onChange={e => this.handleChange(e)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
                   name="password"
                   type="password"
                   value={this.state.password}
                   onChange={e => this.handleChange(e)} />
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
