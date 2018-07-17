import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super()

    this.state = {
      input_value: '' 
    }
  }

  handleChange = event => {
    this.setState({
      input_value: event.target.value 
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text"
          value={this.state.input_value}
          onChange={this.handleChange}
        />
        <p>{this.props.maxChars - this.state.input_value.length}</p>
      </div>
    )
  }
}

export default TwitterMessage
