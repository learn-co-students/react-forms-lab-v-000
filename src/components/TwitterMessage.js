import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  whenChanged = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.whenChanged}/>
        <br></br>
        <small>Remaining: {this.props.maxChars - this.state.value.length}</small>
      </div>
    );
  }
}

export default TwitterMessage;
