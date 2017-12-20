import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor() {
    super();
    // You'll find two inputs in this component: <input type="text"> and <input type="password">. Make this a controlled component by adding the necessary props to these inputs. Their values should be saved in the component's state.
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    const {name, value} = event.target

    this.setState({
      [name]: value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const {username, password} = this.state

    if (!username || !password) {
      return;
    }
    this.props.onSubmit({username, password})
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>

        <div>
          <label>
            Username
            <input 
              id="test-username" 
              type="text"
              name="username"
              value={this.state.username} 
              onChange={this.handleInputChange} 
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
              value={this.state.password} 
              onChange={this.handleInputChange} 
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

//This component takes one prop, onSubmit, which is a function that gets called when the form is being submitted.
LoginForm.propTypes = {
  onSubmit: PropTypes.func
}

export default LoginForm;
