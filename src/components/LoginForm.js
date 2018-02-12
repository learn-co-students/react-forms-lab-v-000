import React from "react";

class LoginForm extends React.Component {

  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    if (event.target.name === 'username') {
      this.setState({
        username: event.target.value,
      })
    }else if (event.target.name === 'password') {
      this.setState({
        password: event.target.value
      })
    }
  }

  handleSubmitAction = (event) => {
    console.log('prevented')
    event.preventDefault();
  }
 
  render() {
    return (
      <form onSubmit={this.handleSubmitAction}>
        <div>
          <label>
            Username
            <input 
              id="test-username" 
              type="text" 
              name="username" 
              value={this.state.username}   
              onChange={this.handleInputChange} 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="test-password" 
              type="password" 
              name="password" 
              value={this.state.password} 
              onChange={this.handleInputChange} 
            />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
