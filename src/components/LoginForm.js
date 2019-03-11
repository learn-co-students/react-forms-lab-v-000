import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }
  handleChange = event => {
    this.setState({
      username: event.target.value, value:this.state.username,
      password: event.target.value, value:this.state.password
    })
  }

  handleSubmit = event => {
    
    if(this.username=='' || this.password=='') {
      onSubmit.event.prevent.default()
    } else { 
      this.props.onSubmit(this.state)
  }
}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange}/>
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
