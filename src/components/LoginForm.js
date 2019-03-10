import React from "react"

class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  // generalized change handler
  handleChange = (event) => {
    this.setState({
      // use bracket notation to assign keys to objects in object literals.
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.username && this.state.password) {

      this.props.onSubmit(this.state)
    }else {
      alert('no!')
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
               id="username"
               type="text"
               name="username"
               onChange={this.handleChange}
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
               onChange={this.handleChange}
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
