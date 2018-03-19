import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      charsLeft: 140
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    var input = event.target.value;

    this.setState({
        charsLeft: 140 - input.length,
        value: input
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.value}
        onChange={this.handleChange}
         />
         <p>Characters Left: {this.state.charsLeft}</p>
      </div>
    );
  }
}


export default TwitterMessage;
