import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.id;
    const value = target.value
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit" value="Submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
