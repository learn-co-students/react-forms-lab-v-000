import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const newState = this.state
    newState[event.target.name] = event.target.value
    this.setState(newState)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitting')
    const name = this.state.username;
    const password = this.state.password;
    
    if (name.length>0 && password.length > 0) {
      this.props.onSubmit({username: name, password: password});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input value={this.state.username}
                  onChange={this.handleInputChange} 
                  name='username'
                  id="test-username" 
                  type="text"
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} 
                    onChange={this.handleInputChange}
                    name='password'
                    id="test-password" 
                    type="password" 
              />
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
