import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {name: ""};
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  handleInput = (e) => {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" name="username" type="text" value={this.state.username} onChange={this.handleInput}/>
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
