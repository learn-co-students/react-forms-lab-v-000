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
    return (
      <div>
        <strong>Your message:</strong>
          <input type="text" value={this.state.value} counter={this.state.counter} onChange={this.handleChange} />
          <p> characters remaining: {this.state.counter} </p>
      </div>
    )
  }
}

export default TwitterMessage
