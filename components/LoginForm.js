import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.setUsername = this.setUsername.bind(this)
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(event)
    if(this.state.username === "" || this.state.password === ""){
      return
    }else{
      this.props.onSubmit({username: this.state.username, password: this.state.password})
    }
  }

  setUsername(event) {
     this.setState({
       username: event.target.value
     })
   }
 
  setPassword(event) {
     this.setState({
       password: event.target.value
     })
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name="username" type="text" value={this.state.username} onChange={this.setUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" type="password" value={this.state.password} onChange={this.setPassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
