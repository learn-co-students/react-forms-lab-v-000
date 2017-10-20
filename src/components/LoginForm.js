import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      username: '',
      password: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    }, console.log(this.state));
  } 




  login = (event) => {
    event.preventDefault();
    if ( (!this.state.username) ||  (!this.state.password) ) {
      alert('You must enter a username and password!');
      
    } else {
      return (this.state);
    }

  }


  render() {
    return (
      <form onSubmit={this.login}>
        <div>
          <label>
            Username
            <input id="test-username" name='username' type="text" value={this.state.username} onChange={(event) => this.handleInputChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name='password' type="password" value={this.state.password} onChange={(event) => this.handleInputChange(event)}/>
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




