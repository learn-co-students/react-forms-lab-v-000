import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      };
  }
  
  changeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }
  
  changePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }
  
  handleClick = event => {
    event.preventDefault();
    //console.log(this.state.password);
    //this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.changeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.changePassword}/>
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
