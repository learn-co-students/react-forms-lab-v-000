import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    }, () => {console.log('name : ', event.target.name, ' | value : ', event.target.value)})
  } // NOTE : ShallowWrapper tester apparently needs a callback function, so just added a test console -- https://github.com/airbnb/enzyme/blob/master/docs/api/ShallowWrapper/setState.md
  
  handleFormSubmit = (event) => {
    console.log('submit form')
    event.preventDefault()
    if (this.state.username !== '' && this.state.password !== '') {
      console.log('submit form : ', this.state.username, this.state.password)
      this.props.onSubmit(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleInputChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleInputChange} value={this.state.password}/>
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
