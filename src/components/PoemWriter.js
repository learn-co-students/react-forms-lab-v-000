import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poemText: '',
      isValid: true
    };
  }

  validPoem = (poem) => {
    const lines = poem.split("\n").map(line => line.trim());
    if (lines.length === 3) {
      const wordsInOne = lines[0].split(" ").length
      const wordsInTwo = lines[1].split(" ").length
      const wordsInThree = lines[2].split(" ").length
      if (wordsInOne === 5 && wordsInTwo === 3 && wordsInThree === 5) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }

  writePoem = (event) => {
    const isValid = this.validPoem(event.target.value);
    this.setState({
      poemText: event.target.value,
      isValid: isValid
    });
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poemText}
          onChange={this.writePoem}
        />
        {!this.state.isValid ? (
        <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>
      ) : null }
      </div>
    );
  }
}

export default PoemWriter;
