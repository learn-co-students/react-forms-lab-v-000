import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

    handleChange = event => {
      //let currentMaxChars = this.state.maxChars
      this.setState({
        value: event.target.value
      })
    }

  render() {
    let characterCounter = this.props.maxChars - this.state.value.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
          value={this.state.value} onChange={this.handleChange}/>
        {characterCounter}
      </div>
    );
  }
}

export default TwitterMessage;
