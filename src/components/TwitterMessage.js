import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      maxChars: this.props.maxChars
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={ event => { this.handleChange(event) } } />
        <h1> {this.state.message }</h1>
        <h1> { this.props.maxChars - this.state.message.length }</h1>

      </div>
    );
  }
}

export default TwitterMessage;
