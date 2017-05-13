import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '', 
      password: ''
    };

    this.setUsername = this.setUsername.bind(this); 
    this.setPassword = this.setPassword.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  setUsername(event) {
    this.setState({
      username: event.target.value,  
    }) 
  }

  setPassword(event) {
    this.setState({
      password: event.target.value,  
    }) 
  }

  handleSubmit(event) {
    event.preventDefault(); 
     
    if (!this.state.username || !this.state.password) {
      return;  
    }
    this.props.onSubmit();  
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" onChange={this.setUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" onChange={this.setPassword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
