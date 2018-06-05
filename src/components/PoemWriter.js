import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      hasError: true
    };
  }

    handleChange = event => {
      this.setState({
        value: event.target.value,
        hasError: this.checkError(event.target.value)
      });
    }

    checkError = value => {
      const splitByLines = value.split("\n").map(line => line.trim())
      const checkNumberOfLines = splitByLines.length === 3
      if (value && checkNumberOfLines) {
        return (
          splitByLines[0].split(" ").length === 5 &&
          splitByLines[1].split(" ").length === 3 &&
          splitByLines[2].split(" ").length === 5
      )
      }
    }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleChange}  />
        {!this.state.hasError ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
