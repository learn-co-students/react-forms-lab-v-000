import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    const currentCount = this.props.maxChars-this.state.message.length

    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={e => this.setState({message: e.target.value})} value={this.state.message}/>
          <p>Characters Left: {currentCount > 0 ? currentCount : "Max character limit reached."}</p>
      </div>
    );
  }
}

export default TwitterMessage;
