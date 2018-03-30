import React from "react";

class LoginForm extends React.Component {
  constructor(prop) {
    super(prop);

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
  }

  onSubmit = (e) => {
    e.preventDefault()
    if(this.state.username !== '' && this.state.password !== '') {
      {this.props.onSubmit}
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name ="username" value={this.state.username} onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name ="password" value={this.state.password} onChange={this.handleInputChange}/>
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
