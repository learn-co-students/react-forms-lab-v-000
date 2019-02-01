import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  verifySubmitLogic = () => ((this.state.username.length > 0) && (this.state.password.length > 0))

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.verifySubmitLogic()) this.props.onSubmit(this.state) 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            value={this.state.username}
            onChange={this.handleInput}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
              value={this.state.password}
              onChange={this.handleInput}
            />
          </label>
        </div>
        <div>
          <button type="submit" 
            disabled={!this.verifySubmitLogic()}
          >
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
