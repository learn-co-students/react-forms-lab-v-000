import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""

    };
  }

  // handleLogin={this.login} passed down as prop
  // login = ({ username, password }) => {
  //  console.log(`Logging in ${username} with password ${password}`);

  handleFormChange = (event) => {
    const name = event.target.name
    const value = event.target.value 
    
    this.setState({
      [name]: value
    }, () => console.log(this.state));
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
      this.props.handleLogin(this.state)
    }
  }

  

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleFormChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleFormChange} value={this.state.password}/>
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
