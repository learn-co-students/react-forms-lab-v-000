import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.changeInput = this.changeInput.bind(this);
    this.formSubmit = this.formSubmit.bind(this);

    this.state = {
      username: '',
      password: '',
    };
  }

  changeInput(field, e) {
    this.setState({
      [field]: e.target.value,
    });
  }

  formSubmit(e) {
    e.preventDefault();
    const {username, password} = this.state;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({
      username,
      password
    });
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.changeInput.bind(this, 'username')} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.changeInput.bind(this, 'password')}/>
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