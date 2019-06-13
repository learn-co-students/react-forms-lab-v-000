import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      charsLeft: this.props.maxChars
    };
  }

  handleChange = event => {
    var input = event.target.value
    this.setState({
      value: input,
      charsLeft: this.props.maxChars - input.length  
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange.bind(this)}/>
        <p>
        Characters Left: {this.state.charsLeft} / {this.props.maxChars}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;

