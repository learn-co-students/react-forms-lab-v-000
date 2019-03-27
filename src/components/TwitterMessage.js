import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    value: '';
    this.state = {
      charsLeft: 140
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      charsLeft: this.props.maxChars - event.target.value.length

    });
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          value={this.state.value}
          onChange={this.handleChange}/>
          <p>{this.state.charsLeft} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
