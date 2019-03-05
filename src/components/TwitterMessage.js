import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      remChars: this.props.maxChars
    };
  }

  handleChange = event => {
    const rem = 140 - event.target.value.length
    this.setState({
      value: event.target.value,
      remChars: rem,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
          value={this.state.value}
          onChange={this.handleChange}/>
        <h3>Remaining characters</h3>{this.state.remChars}
      </div>
    );
  }
}

export default TwitterMessage;
