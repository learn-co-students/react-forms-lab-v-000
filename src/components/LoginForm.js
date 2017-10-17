import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      username: "",
      password: ""
    };
  }

  handleInputChange = event => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    if (event.username && event.password) {
      this.onSubmit(event.username, event.password)}
      event.preventDefault()
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
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit" value="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
