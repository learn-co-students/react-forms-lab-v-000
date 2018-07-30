import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  changeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submitHandler = event => {
    event.preventDefault();
    console.log("Hello")

  }

  render() {
    return (
      <form onSubmit={event => this.submitHandler(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.changeHandler}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.changeHandler}/>
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
