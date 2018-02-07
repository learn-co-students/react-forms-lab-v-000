import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsernameChange = event => {
    this.setState({
      username: event.target.value

    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    if(this.state.username  && this.state.password){
      this.props.onSubmit(this.state)
    return true;

    }
    else
      {
        return false;
      }


  }


  render() {
    return (

      <form onSubmit={this.handleSubmit} >
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
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
