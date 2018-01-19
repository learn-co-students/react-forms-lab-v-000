import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characterCount: this.props.maxChars,
      value: '',
    };
  }

  handleChange = (e) => {
    const userInput = e.target.value;
    const count = this.props.maxChars - userInput.length;
    this.setState({
      value: userInput,
      characterCount: count,
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
               value={this.state.value}
               onChange={this.handleChange}/>
        <p>{this.state.characterCount}/{this.props.maxChars} remain.</p>
      </div>
    );
  }
}

export default TwitterMessage;
