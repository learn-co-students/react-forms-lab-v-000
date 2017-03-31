const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  handleChange(val, event) {
    this.setState({
      [val]: event.target.value
    });
  }

  loginSubmit(event) {

    event.preventDefault();

    const username = this.state.username;
    const password = this.state.password;

    if(username && password) {
      this.props.onSubmit({username, password});
    } else {
      return;
    }
  }

  render() {
    return (
      <form onSubmit={this.loginSubmit} >
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.username} type="text" onChange={this.handleChange.bind(this, 'username')} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.password} type="password" onChange={this.handleChange.bind(this, 'password')} />
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
