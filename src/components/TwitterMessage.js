import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      eventValue: ''
    }
  }

  setValue = (event) => {
    console.log(event)
    this.setState({
      eventValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.eventValue} onChange={this.setValue}/>
        <p>Characters left: {this.props.maxChars - this.state.eventValue.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
