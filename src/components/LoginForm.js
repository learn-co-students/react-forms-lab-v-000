import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }




  handleChange = event => {
    debugger
    // const {name, value } = event.target;
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    });
  }

 handleSubmit = event => {
    event.preventDefault();
    
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            value={this.state.username} 
            onChange={this.handleChange} 
            name="username"
            id="test-username" 
            type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            value={this.state.password} 
            onChange={this.handleChange} 
            name="password"
            id="test-password" 
            type="password" />
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
