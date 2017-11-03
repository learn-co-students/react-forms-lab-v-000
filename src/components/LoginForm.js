import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    // this.login = this.login.bind(this);
    
    this.state = {
      username: '',
      password: ''
    };
  }
  
  handleFormSubmition = (event) => { 
    event.preventDefault();
    const { username, password } = this.state;

    if(!username){
      return;
    }else if(!password){
      return;
    }
  }
  
  handelInput = (event) => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmition}>
        <div>
          <label>
            Username
            <input name="username" id="test-username" type="text" onChange={this.handelInput} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" id="test-password" type="password" onChange={this.handelInput} value={this.state.password}/>
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
