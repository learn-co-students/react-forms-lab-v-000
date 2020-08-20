import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleLogin = event => {
    // console.log(event.type)
    event.preventDefault()
    if(!this.state.username || !this.state.password)
     return
    this.props.handleLogin(this.state)
  }

  handleChanges = event => {
    this.setState({
      username: event.target.value,
      password: event.target.value
    })
  }



  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleChanges(event)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handleChanges(event)} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button onChange={event => this.handleLogin(event)} type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
