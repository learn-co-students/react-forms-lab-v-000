import React from 'react';
import PropTypes from 'prop-types';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      password: ''
    };
  }

  updateText = (e) => {
    this.setState({
      text: e.target.value,
    })
  }

  updatePassword = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    let password = this.state.password
    let text = this.state.text
    if (password === '' && text === ''){
      return
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username {this.state.text}
            <input id="test-username" type="text" onChange={this.updateText} value={this.state.text} />
          </label>
        </div>
        <div>
          <label>
            Password {this.state.password}
            <input id="test-password" type="password" onChange={this.updatePassword} value={this.state.password} />
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
  onSubmit: PropTypes.func,
};

export default LoginForm;
