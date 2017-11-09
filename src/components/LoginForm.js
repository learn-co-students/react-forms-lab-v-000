import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor() {
    super();

//define initial values
    this.state = {
      username: '',
      password: '',
    };
  }

  //render the input with updated value by changing the state
  handleInputChange = event => {
    //retrieving name and value of event target from JS
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    //both fields needs to be filled in
    if (!username || !password) {
      return
    }
    this.props.onSubmit({ username, password })
  }

  render() {
    return (
      //adding event handler to the form
      <form onSubmit={this.handleSubmit}>
        <div>
        //adding necessary props to the inputs to make them controlled components
          <label>
            Username
            <input id="test-username" type="text" name="username" value="{this.state.username}" onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value="{this.state.password}" onChange={this.handleInputChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

//onSubmit prop is a function, gets called when the form is submitted
LoginForm.propTypes = {
  onSubmit: PropTypes.func,
}

export default LoginForm;
