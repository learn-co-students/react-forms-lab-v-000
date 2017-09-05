import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };

    this.passwordChanger = this.passwordChanger.bind(this)
    this.usernameChanger = this.usernameChanger.bind(this)
    this.submitProcessor = this.submitProcessor.bind(this)
  }

  submitProcessor(event){
    event.preventDefault();
    var username = this.state.username;
    var password = this.state.password;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({
      'username': username,
      'password': password
    });
  };

  usernameChanger = event => {
    this.setState({
      username: event.target.value,
    });
  };

  passwordChanger = event => {
    this.setState({
      password: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.submitProcessor}>
        <div>
          <label >
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.usernameChanger}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.passwordChanger}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

//LoginForm.propTypes = {
//  onSubmit: React.PropTypes.func,
//};

export default LoginForm;
