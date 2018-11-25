import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainChars: this.props.maxChars,
      value: ''
    };
  }

  handleInput = event => {
    
    this.setState ({
      value: event.target.value,
      remainChars: this.props.maxChars - event.target.value.length
    })
  }

    render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleInput} value={this.state.value}/>
        {this.state.remainChars}
      </div>
    );
  }
}

export default TwitterMessage;
