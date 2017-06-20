import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleInputChange(field, event) {
    this.setState({
      [field]: event.target.value,
    });
  }

   handleFormSubmit(ev) {
    ev.preventDefault();
    const { username, password } = this.state;

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
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.username} onChange = {this.handleInputChange.bind(this, 'username')} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.password} onChange={this.handleInputChange.bind(this, 'password')}  type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
