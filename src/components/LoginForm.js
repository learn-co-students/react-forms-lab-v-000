import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.state = {username: '', password: ''};    
  }

  handleInputChange(e){
    const {name, value} = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit(e){
    e.preventDefault()
    const {username, password} = this.state
    if(!username || !password){
      return;
    }
    this.props.onSubmit({username, password})
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" onChange={this.handleInputChange} value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" onChange={this.handleInputChange} value={this.state.password} />
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
