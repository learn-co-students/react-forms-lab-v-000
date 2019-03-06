import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      charecters: 0
    };
  }

  handleEvent = event => {
    this.setState({
      value: event.target.value,
      charecters: event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" id="twitterMessage" onChange={event => this.handleEvent(event)} value={this.state.value} />
        <p>Charecters Remaining:{this.props.maxChars - this.state.charecters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
