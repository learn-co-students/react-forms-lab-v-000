const React = require('react');

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
    
    this.handleChangeUser = this.handleChangeUser.bind(this);

    this.handleChangePass = this.handleChangePass.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.username || !this.state.password) {
      return null;
    }

    let currentState = this.state

    this.props.onSubmit(currentState);
  }

  handleChangeUser(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleChangePass(event) {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleChangeUser} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleChangePass}/>
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
