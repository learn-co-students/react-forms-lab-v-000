import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" />
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
