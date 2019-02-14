import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleOnChange = (event) => {
    // console.log(event.target.name + ': ' + event.target.value)
    this.setState({[event.target.name]: event.target.value}
    , () => {
      console.log(`username: ${this.state.username} \n pass: ${this.state.password}`)
    });
  }

  handleSub = (event) => {
    event.preventDefault();
    if (!this.state.username || !this.state.password) {
      return
    }
    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSub}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleOnChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleOnChange} value={this.state.password} />
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
