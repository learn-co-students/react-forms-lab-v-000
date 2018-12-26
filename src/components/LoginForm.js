import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formSubmit = (event) => {
    event.preventDefault()
    if (this.state.username === '' || this.state.password === '') return
    (this.props.onSubmit(this.state))
  }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            onChange={this.onChange}/></label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
            onChange={this.onChange}/></label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;