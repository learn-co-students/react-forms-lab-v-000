import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange(event){
    if(event.target.id === "test-username"){
      this.setState({
        username: event.target.value
      });
    } else if (event.target.id === "test-password") {
      this.setState({
        password: event.target.value
      })
    }
  }

  handleForm(event){
    event.preventDefault();
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.onSubmit(this.state.username, this.state.password);
    }
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={this.handleInputChange.bind(this)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={this.handleInputChange.bind(this)}/>
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.handleForm.bind(this)}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
