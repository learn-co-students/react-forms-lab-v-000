import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }
  handleUsername = (event) =>{
  this.setState({
    username: event.target.value
  })
}

handlePassword = (event) =>{
  this.setState({
    password: event.target.value
  })
}

handleSubmit = (event) => {
    event.preventDefault()
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.onSubmit
    }
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange= {this.handleUsername} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange = {this.handlePassword} />
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
