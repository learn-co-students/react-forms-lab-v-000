import React from 'react';
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      password: ''
    };
  }

  changeText = (event) => {
    this.setState({
    text: event.target.value
    })
  }

  changePW = (event) => {
    this.setState({
    password: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();

    let password = this.state.password
    let text = this.state.text
    if (password === '' && text === '') {
      return
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username: {this.state.text}
            <input id="test-username" type="text" onChange={this.changeText} value={this.state.text} />
          </label>
        </div>
        <div>
          <label>
            Password: {this.state.password}
            <input id="test-password" type="password" onChange={this.changePW} value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

LoginForm.PropTypes = {
  onSubmit: PropTypes.func
};

export default LoginForm;
