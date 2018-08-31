import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      newText: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" id="newText" onChange={e => this.setState({newText: e.target.value})} value={this.state.newText}/>
        <br/>
        Characters Left: {this.props.maxChars - this.state.newText.length}
      </div>
    );
  }
}

export default TwitterMessage;
