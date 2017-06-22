import React from 'react'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
  constructor () {
    super ()
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const { username, password } = this.state

    if (!username || !password ) {
      return
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange} />
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
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func
}

export default LoginForm
