import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);  
  }

  handleInputChange(event) {
    this.setState({
      username: event.target.value,
      password: event.target.value,
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const username = this.username;
    const password = this.password; 
    
    if (!username || !password) {
      return false; 
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
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
