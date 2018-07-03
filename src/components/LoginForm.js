import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_val: '',
      pw_val: ''
    };
  }
  updateUsername = (e) => { 
    this.setState({
      user_val: e.target.value
    })

    console.log(this.props)
  }

  updatePassword = (e) => { 
    this.setState({
      pw_val: e.target.value
    })
  }

  validateForm = (e) => {
    e.preventDefault()

    if (this.validInput()) {
      this.props.onSubmit(this.state.user_val, this.state.pw_val)
    }
  }

  validPassword = () => this.state.pw_val.length > 0 ? true : false

  validUsername = () => this.state.user_val.length > 0 ? true : false

  validInput = () => this.validPassword() && this.validUsername()

  render() {
    return (
      <form onSubmit={this.validateForm}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.user_val}
              onChange={this.updateUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.pw_val}
              onChange={this.updatePassword}
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
