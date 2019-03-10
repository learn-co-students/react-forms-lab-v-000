import React from "react"

class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value,
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (event.target[0].value && event.target[1].value) {
      console.log(event.target[0].value)
      console.log(event.target[1].value)
      const username = event.target[0].value
      const password = event.target[1].value

      this.props.onSubmit({username, password})
    } else {
      alert('no!')
    }
  }

  render() {
    return (
      <form onSubmit={ (event) => this.handleSubmit(event) }>
        <div>
          <label>
            Username
            <input
               id="username"
               type="text"
               name="username"
               value={this.state.username}
               onChange={this.handleNameChange}
             />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
               id="password"
               type="text"
               name="password"
               value={this.state.password}
               onChange={this.handlePasswordChange}
             />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm
