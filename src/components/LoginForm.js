import React from "react";

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  validateForm() {
     return this.state.username.length > 0 && this.state.password.length > 0;
   }

   handleSubmit = event => {
     event.preventDefault();
   }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
          <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
        <button
           disabled={!this.validateForm()}
           type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
