import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      yourMessage: "",
      remainingChars: this.props.maxChars
    };
  }

  handleInputChange = (e) => {
    const charLeft = (140 - e.target.value.length)
    this.setState({
      yourMessage: e.target.value,
      remainingChars: charLeft
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleInputChange} value={this.state.yourMessage} />
        {this.state.remainingChars}
      </div>
    );
  }
}

export default TwitterMessage;
