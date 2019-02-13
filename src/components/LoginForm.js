import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
      }
    }

   handleUsernameChange = (event) => {
     this.setState({
  //     ...this.state.profileInfo,
     username: event.target.value,

    })
  }

  handlePasswordChange = (event) => {
    this.setState({
 //     ...this.state.profileInfo,

    password: event.target.value
   })
 }
  submitButton = (event) => {
    event.preventDefault()

    if (this.state.username !== '' && this.state.password !== '') {
     this.props.onSubmit({username:this.state.username, password: this.state.password})
   }
  }



  render() {
    return (
      <form onSubmit={ (event) => {this.submitButton(event)}}>
        <div>
          <label>
            Username
            <input
            id="username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            id="password"
            type="password"
             name="password"
             value={this.state.password}
             onChange={this.handlePasswordChange}
            />
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
