import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: this.props.maxChars,
      message: ''
    };
  }

  handleChange = event => {
    const x = this.props.maxChars - event.target.value.length
    this.setState({
      chars: x,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={this.handleChange} />
        <p>Remaining Characters: {this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
