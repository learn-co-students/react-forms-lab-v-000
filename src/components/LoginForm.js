import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     username: '',
     password: ''
    };
  }

  handlechange = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
      })
  }

  onSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handlechange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handlechange} />
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
