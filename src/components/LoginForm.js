import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }
  
  handleUsername = event => {
     this.setState({
        username: event.target.value
     });
  }  
  
  handlePassword = event => {
     this.setState({
        password: event.target.value
     });
  }
  
  handleSubmit = event => {
    
    if (this.state.username && this.state.password) {
      const {username, password} = this.state
      this.props.onSubmit({username, password})
    } 
    
    event.preventDefault();
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePassword}/>
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
