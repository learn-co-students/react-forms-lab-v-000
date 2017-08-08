import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

 onSubmit = () => {
  console.log('blah')
}

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value,
    })
    console.log('update')
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value,
    })
    console.log('update')
  }

   onSubmit = event => {
    event.preventDefault(); 
  }
  


  render() {

    return (
      <form onSubmit = {this.onSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" 
            type="text" 
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}/>
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
          <button  type="submit" > Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;




