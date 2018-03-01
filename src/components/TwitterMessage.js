import React from "react";

class TwitterMessage extends React.Component {
  constructor() {

    super();

    this.state = {
      value: "",
    };
  }

  handleMessageChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleMessageChange}
        />
        <h4>Characters Left: {this.props.maxChars - this.state.value.length} </h4>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140
}

export default TwitterMessage;
