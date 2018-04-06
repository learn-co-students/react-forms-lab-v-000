import React from "react";

function isValidPoem(content) {
  const lines = content.split("\n").map(line => line.trim());

  if (content && lines.length === 3) {
    return (lines[0].split(" ").length === 5 && lines[1].split(" ").length === 3 && lines[2].split(" ").length === 5);
  } else {
    return false
  }
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      isValid: false,
    };
  }

  handleTxtChange = event => {
    this.setState({
      text: event.target.value,
      isValid: isValidPoem(event.target.value),
    });
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.text} onChange={this.handleTxtChange}/>
        {!this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>) : null}
      </div>
    );
  }
}
