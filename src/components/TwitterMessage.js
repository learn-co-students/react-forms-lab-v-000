import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      counter: this.props.maxChars
    };
  }

  handleTyping = event => {
    this.setState({
      value: event.target.value,
      counter: this.props.maxChars - event.target.value.length
    });
     
  }
 
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleTyping}/>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
