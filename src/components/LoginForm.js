import React from "react";

class LoginForm extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      username: "",
      pw: ""
    };
  }

  loginChange = (event) => {
    this.setState({
      login: event.target.value
    });
  }

  pwChange = (event) => {
    this.setState({
      pw: event.target.value
    });
  }

  handleForm = (e) => {
    e.preventDefault();
    this.props.onSubmit;
  }

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              onChange={this.pwChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              onChange={this.loginChange} />
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
