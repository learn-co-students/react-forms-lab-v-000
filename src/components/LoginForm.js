import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      // new code
      username: "",
      password: ""
      // end of new code
    };
  }
  
  // new code
  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault()
    // eslint-disable-next-line
    if (this.state.username != "" && this.state.password != "") {
      this.props.handleLogin(event)
    }
  }
  // end of new code
  
  render() {
    // new code in form, before it was <form>
    // new code in <input>, added onChange={this.handleInput}
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInput}/>
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
