import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      value: "",
      username: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    if (event.target.id === "test-username"){
      this.setState({
        username: event.target.value,
      })
    } else {
      this.setState({
        password: event.target.value,
      })
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.onSubmit
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
