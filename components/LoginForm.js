import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.valChange = this.valChange.bind(this)
    this.checkSubmit = this.checkSubmit.bind(this)
  }

  valChange(val, e) {
    this.setState({
      [val]: e.target.value
    })
  }

  checkSubmit(e) {
    e.preventDefault()
    if (!this.state.username || !this.state.password) {
      return
    } else {
      this.props.onSubmit()
    }
  }

  render() {
    return (
      <form onSubmit={ this.checkSubmit }>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={ this.state.username } onChange={ this.valChange.bind(this,'username') }/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={ this.state.password } onChange={ this.valChange.bind(this,'password') }/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
