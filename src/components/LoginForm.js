import React from "react";

class LoginForm extends React.Component {
  
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = (event) => {

    event.preventDefault()

    if ( !this.state.username || !this.state.password ) return

    this.props.handleLogin(this.state) 
  }
  
  
  updateLogin = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } >
        <div>
          <label>
            Username
            <input 
              id="username" 
              name="username" 
              type="text"
              value={ this.state.username }
              onChange={ this.updateLogin }
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password"
              value={ this.state.password }
              onChange={ this.updateLogin } 
          />
          </label>
        </div>
          <input
            type="submit"
            value="Submit"
          />
      </form>
    );
  }
}

export default LoginForm;
