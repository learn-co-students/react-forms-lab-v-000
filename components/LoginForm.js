const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.updateUser = this.updateUser.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.submitEvent = this.submitEvent.bind(this)

    this.state = {
      username: "",
      password: ""
    };
  }

  updateUser(event) {
    this.setState({
      username: event.target.value,
    })
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value,
    })
  }

  submitEvent(event) {
    event.preventDefault();
    if (!this.state.username || !this.state.password) {
      return null
    }
    
    this.props.onSubmit()
  }

  render() {
    return (
      <form onSubmit={this.submitEvent}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.updateUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.updatePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
