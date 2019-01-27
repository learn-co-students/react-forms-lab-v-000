import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username : "",
      password : ""
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  formHandle = (event) => {
    event.preventDefault()
    if((this.state.username.length + this.state.password.length) > 0){
      this.props.onSubmit
    }
  }

  render() {
    return (
      <form onSubmit={this.formHandle}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleInputChange}/>
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
