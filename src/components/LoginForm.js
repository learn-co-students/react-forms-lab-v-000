import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleFormSubmit = (event) => {
   event.preventDefault()
   const username = this.state.username
   const password = this.state.password
   if (username && password){
     this.props.onSubmit(this.state)
   }
 }

  handleInputChange = (event) => {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  setUsername(event){
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
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
