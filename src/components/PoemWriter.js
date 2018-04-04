import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemBody: '',
      isValid: false
    };
  }

  handleChange = (event) => {
    this.setState({
      poemBody: event.target.value,
      isValid: this.isPoemValid(event.target.value)
    })
  }

  isPoemValid = (content) => {
    const contentByLine = content.split("\n").map(line => line.trim())
    if (contentByLine.length === 3 && contentByLine[0].split(" ").length === 5 && contentByLine[1].split(" ").length === 3 && contentByLine[2].split(" ").length === 5) {
      return true
    } else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea value={this.state.poemBody} onChange={this.handleChange} rows="3" cols="60" />
        {this.state.isValid ? <div id="poem-congratulations" style={{ color: "blue" }}>
          A masterpiece of a poem, truly a work of art!</div>
          : <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
