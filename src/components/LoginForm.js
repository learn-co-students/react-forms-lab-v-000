import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleSubmit = (event) => {
      event.preventDefault()
      if (this.state.username && this.state.password) {
         this.props.onSubmit({username:this.state.username, password: this.state.password })
       }
    }


  handleChange = (event) => {
      this.setState({[event.target.name]: event.target.value})
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" name='username' type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name='password' value={this.state.password} onChange={this.handleChange} />
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
