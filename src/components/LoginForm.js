import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if(this.state.username !== '' && this.state.password !== '') {
      console.log('Logged in successfully.');
    } else {
      alert('Please enter a username and password.');
    }
      event.preventDefault();
    }

    handleInputChange(event) {

      if(event.target.type === 'password') {
        this.setState({
            password: event.target.value
          })
        } else {
          this.setState({
              username: event.target.value
            })
          }
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            />
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
