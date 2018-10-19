import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {username: "", password: ""};
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.username || !this.state.username) return
    this.props.onSubmit(this.state)
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    console.log(this.props)
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
            <input id="password" name="password" type="password" name="password" type="text" onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <button type="submit"> </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
