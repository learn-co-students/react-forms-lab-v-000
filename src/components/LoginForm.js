import React from 'react'
import PropTypes from 'prop-types'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  // updateUsername = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }

  // updatePassword = (event) => {
  //   this.setState({
  //     password: event.target.value
  //   })
  // }

  updateField = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  formCallback = event => {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if (username && password) {
      this.props.onSubmit({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={this.formCallback}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.updateField}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.updateField}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

// LoginForm.PropTypes = {
//   onSubmit: PropTypes.func
// }

export default LoginForm