import React from "react";

class LoginForm extends React.Component {

  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  changeName = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  changePass = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.state.username !== '' && this.state.password !== '' ? this.props.onSubmit : null
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.changeName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.changePass}/>
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
