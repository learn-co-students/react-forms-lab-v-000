import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      password: "",
      username: "",
    };

    this.processSubmit = this.processSubmit.bind(this);
    this.processInputChanges = this.processInputChanges.bind(this);
  }

  processSubmit(event) {
    event.preventDefault();
    const {username, password} = this.state;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({
      username,
      password
    });
  }

  processInputChanges(field, event) {
    this.setState({
      [field]: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.processSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.processInputChanges.bind(this, 'username')}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.processInputChanges.bind(this, 'password')}/>
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
