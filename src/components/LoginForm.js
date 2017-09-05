import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (e)=>{
    // console.log(e.target)
    this.setState({
       [e.target.name]: e.target.value,
    }
  );
  }

  handleFormSubmit = (e)=> {
    e.preventDefault();
    if(!this.state.username || !this.state.password){
      return;
    }
    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} name="username" onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} name="password" onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: React.PropTypes.func,
}

export default LoginForm;
