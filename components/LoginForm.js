import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      valueUsername: "",
      valuePassword: ""
    };

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(ev) {
    name = ev.target.name
    this.setState({ [name]: ev.target.value })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    if(this.state.valueUsername && this.state.valuePassword) {
      this.props.onSubmit({username: this.state.valueUsername, password: this.state.valuePassword})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="valueUsername" value={this.state.valueUsername} onChange={this.handleChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="valuePassword" value={this.state.valuePassword} onChange={this.handleChange} type="password" />
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
  onSubmit: React.PropTypes.func.isRequired
}
