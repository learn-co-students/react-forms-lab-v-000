import React from "react";

const validateValue = value => {
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

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: true
    };
  }


  changeValue = event => {
   const value = event.target.value
    this.setState({
      value,
      valid: validateValue(value)
    })
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.value} onChange={this.changeValue}/>
        {!this.state.valid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
