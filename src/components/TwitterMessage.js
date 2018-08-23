import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {msg: ''};
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        onChange={event => this.setState({msg: event.target.value})}
        value={this.state.msg}/>
        {this.props.maxChars-this.state.msg.length}
      </div>
    );
  }
}

export default TwitterMessage;
