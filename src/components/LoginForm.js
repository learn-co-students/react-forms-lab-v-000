import React from "react";

class LoginForm extends React.Component {
  //constructor() {

    state = {
      username: '',
      password: ''
      }

   handleInputChange = (event) => {
     this.setState({
  //     ...this.state.profileInfo,
     username: event.target.value,
     password: event.target.value
    })
  }

  submitButton = (event) => {
    event.preventDefault()
    if (this.state.username != '' && this.state.password != '') {
     this.props.onSubmit()
   }
  }
//}

  render() {
    return (
      <form onSubmit={this.submitButton}>
        <div>
          <label>
            Username
            <input
            id="username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
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
             onChange={this.handleInputChange}
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
