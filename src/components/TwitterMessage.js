import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      chars_left: this.props.maxChars
    };

    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange = event => {
    var input = event.target.value;
    this.setState({

      value: event.target.value,

      chars_left: this.props.maxChars - input.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <form>
          <input 
          type="text" 
          name="message" 
          id="message"
          onChange={this.handleInputChange}
          value={this.state.value} />
        </form>
        <p>Characters Left: {this.state.chars_left}</p>
      </div>
    );
  }
}

export default TwitterMessage;
