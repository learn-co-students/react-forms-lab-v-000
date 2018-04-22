import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      usernameText: '',
      passwordText: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.usernameText.length > 0 && this.state.passwordText.length > 0) {
      this.props.onSubmit({username: this.state.usernameText, password: this.state.passwordText})
    } else {
      alert("Need to submit a Username and Password")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username:
            <input id="test-username" type="text" name="usernameText" value={this.state.usernameText} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input id="test-password" type="password" name="passwordText" value={this.state.passwordText} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
