import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      username: '',
      password: ''
    };
  }
  
  handleInputChange = event => { 
    this.setState({ 
      username: event.target.value,
      password: this.state.password,
    });
  }
  
  handlePasswordChange = event => { 
    this.setState({ 
      username: this.state.username,
      password: event.target.value,
    });
  } 
  
  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({ username, password });
  };

  render() {
    return (
      <form onSubmit= {this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username"
            type="text"
            name="username" 
            value={this.state.username}
            onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" 
            type="password"
            name="password" 
            value={this.state.password}
            onChange={this.handlePasswordChange}/> 
          </label>
        </div>
        <div>
          <button type="submit" onChange={this.onSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
