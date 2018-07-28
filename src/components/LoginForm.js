import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
        username: '',
        password: ''
    };
  }
    
  handleChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  
  onSubmitValidation = event => {
      if (this.state.password !== '' && this.state.username !== '') {
          this.props.onSubmit(this.state)
      } 
      
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmitValidation}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div> 
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
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
