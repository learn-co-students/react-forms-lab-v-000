import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange (field, event) {
    this.setState({
      [field]: event.target.value,
    })
  }

  checkSubmit(event) {
    event.preventDefault();
    const { username, password } = this.state
    if (this.username = '' || this.password != ''){
      return;
    }

    this.props.onSubmit({
      username,
      password
    })
  }

  render() {
    return (
      <form onSubmit={this.checkSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" onChange={this.handleInputChange.bind(this, 'username')} value={this.state.username} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" onChange={this.handleInputChange.bind(this, 'password')} value={this.state.password} type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func,
};

export default LoginForm;
