import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      maxChars: 280
    }
  }

  handleTwitterMessageChange = event => {
    this.setState({
      maxChars: 280 - event.target.value.length,
      value: event.target.value
    })
  }





  render() {
    return (

      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTwitterMessageChange(event)} value={this.state.value}/>
        <h3>Characters Left: {this.state.maxChars}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
