import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      username: '',
      password: ''
    };
  }
  
  handleInputChange = event => { 
    this.setState({ 
      username: event.target.value,
      password: event.target.value,
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username"
            type="text"
            name="username" 
            value={this.state.username}
            onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" 
            type="password"
            name="password" 
            value={this.state.password}/> 
            {this.handleInputChange}
          </label>
        </div>
        <div>
          <button type="submit" onChange={this.props.onSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
