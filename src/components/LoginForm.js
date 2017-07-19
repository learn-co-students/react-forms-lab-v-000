import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      username: event.target.value,
    });
  }

  handleInputChange2 = event => {
    this.setState({
      username: event.target.value,
    });
  }

  submitFunction = (event) => {
    event.preventDefault();
    if (this.state.username != "" && this.state.password != "") {
      this.props.onSubmit
    }
  }

  render() {
    return (
      <form onSubmit={this.submitFunction}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.username} onChange={this.handleInputChange2} />
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
