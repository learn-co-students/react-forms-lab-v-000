import React from 'react';

class LoginForm extends React.Component {
  constructor() {
    super();
    
    this.state = {
      username: '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    
    var value = e.target.value;
    
    var input = e.target.name;
    
    this.setState({
      [input]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const { username, password } = this.state;

    if (!username || !password) {
      return;
    }

    this.props.onSubmit({
      username,
      password
    });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <div>
          <label>
            Username
            <input 
              id="test-username" 
              type="text"
              name="username"
              value={ this.state.username } 
              onChange={ this.handleChange } 
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="test-password" 
              type="password"
              name="password"
              value={ this.state.password } 
              onChange={ this.handleChange } 
            />
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
};

export default LoginForm;