import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  updateUsername=(event)=>{
    this.setState({
      username: event.target.value
    });
  }

  updatePassword=(event)=>{
    this.setState({
      password: event.target.value
    })
  }

  reviewSubmit=(event)=>{
    event.preventDefault();
    if(!this.state.username && !this.state.password){
      return this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.reviewSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.updateUsername(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.username} onChange={event => this.updatePassword(event)}/>
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