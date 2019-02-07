import React from 'react'

class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = event => {
    this.setState({
      // works for both pass and user
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              value={this.state.tweet}
              type="text"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" >
            Log in
          </button>
        </div>
      </form>
    )
  }
}

export default LoginForm
