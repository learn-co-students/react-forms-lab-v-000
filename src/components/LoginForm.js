import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      passwordValue: '',
      usernameValue: ''
    };
  }

  updateUsername = function (e) {
    this.setState({
      usernameValue: e.target.value
    })
  }.bind(this);

  updatePassword = function (e) {
    this.setState({
      passwordValue: e.target.value
    })
  }.bind(this);

  submitForm = function (e) {

    if(this.state.passwordValue && this.state.usernameValue){
      this.props.onSubmit()
    }else{
      e.preventDefault()
    }
  }.bind(this);

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value = {this.state.usernameValue} onChange={this.updateUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value = {this.state.passwordValue} onChange={this.updatePassword}/>
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
