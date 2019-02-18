import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          value={this.state.value}
          onChange={event => this.setState({value: event.target.value})}
        />
        {this.props.maxChars-this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
