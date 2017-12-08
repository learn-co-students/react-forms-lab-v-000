import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handlePWChange = this.handlePWChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUserChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handlePWChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" value={this.state.username} type="text" onChange={this.handleUserChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" value={this.state.password} type="password" onChange={this.handlePWChange}/>
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
