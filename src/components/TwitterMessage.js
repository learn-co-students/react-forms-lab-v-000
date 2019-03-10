import React from "react"

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      counter: this.props.maxChars,
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      counter: this.characterCounter()
    })
  }

  characterCounter = () => {
    return this.state.counter - 1
  }

  render() {
    console.log(this.state.value)
    console.log(this.state.counter)
    return (
      <div>
        <strong>Your message:</strong>
        <form onSubmit={ (event) => this.handleSubmit(event) }>
          <input type="text" value={this.state.value} counter={this.state.counter} onChange={this.handleChange} />
          <p> characters remaining: {this.state.counter} </p>
        </form>
      </div>
    )
  }
}

export default TwitterMessage
