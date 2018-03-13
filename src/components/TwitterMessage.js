import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chars: "",
      remaining: this.props.maxChars
    };
  }

  remainingChars = (event) => {;
    this.setState({
      remaining: this.props.maxChars - event.target.value.length,
      chars: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.remainingChars}
          type="text"
          value={this.state.chars} />
          <p>{this.state.remaining} characters left.</p>
      </div>
    );
  }
}

export default TwitterMessage;
