import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUserName(event){
    this.setState({
      username: event.target.value
    });
  }

  handleInputChange(event){
    this.setState({
      password: event.target.value
    });
  }

  handleForm(event){
    event.preventDefault();
    if (this.state.username.length > 0 && this.state.password.length > 0){
      // dumb input requirement but it is js I guess
      this.props.onSubmit({username: this.state.username,password: this.state.password});
    }
  }

  render() {
    return (
      <form onSubmit={this.handleForm.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} name="username" onChange={this.handleUserName.bind(this)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleInputChange.bind(this)}/>
          </label>
        </div>
        <div>
          <input type="submit" value="Log in" />
        </div>
      </form>
    );
  }
}

export default LoginForm;
