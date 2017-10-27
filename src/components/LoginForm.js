import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
      passWord: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    if (this.state.userName === '' || this.state.passWord === '') {
      return
    }

    this.props.onSubmit(this.state.userName, this.state.passWord)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
              type="text"
              name="userName"
              value={this.state.userName}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password"
              type="password"
              name="passWord"
              value={this.state.passWord}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
