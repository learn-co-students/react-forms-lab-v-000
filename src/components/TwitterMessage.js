import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {charLeft: ""};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" maxLength="140"  onChange={event => this.setState({charLeft: event.target.value})} value={this.state.charLeft} />
        <br/>
        <small>You have {this.props.maxChars-this.state.charLeft.length} characters left</small>
      </div>
    );
  }
}

export default TwitterMessage;
