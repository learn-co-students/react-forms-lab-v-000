import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      text:''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.text} onChange={ e => this.setState({text: e.target.value})} />
        {this.props.maxChars-this.state.text.length}
      </div>
    );
  }
}

export default TwitterMessage;
