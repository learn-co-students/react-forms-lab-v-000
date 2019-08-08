import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    	username: "",
	password: "" 
    };
  }


  updateUsername(e){
	this.setState({
		username: e.target.value
	})
  }

  updatePassword(e){
	this.setState({
		password: e.target.value
	})
  }
  submitHandle(e){
  	e.preventDefault();
	if(this.state.username.length > 0 && this.state.password.length > 0){
		this.props.handleLogin(); 
	}
  }
  render() {
    return (
      <form onSubmit={this.submitHandle.bind(this)}>
        <div>
          <label>
            Username
            <input id="username" value={this.state.username} name="username" type="text" onChange={this.updateUsername.bind(this)}  />
          </label>
        </div>
        <div>
          <label>
            Password
	    <input id="password" value={this.state.password} name="password" type="password" onChange={this.updatePassword.bind(this)} />
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
