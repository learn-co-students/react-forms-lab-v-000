import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      valid: false
    };
  }

  validatePoem = (e) => {
    this.setState({
      input: e.target.value,
      valid: this.validPoem(e)
    })
  }

  validPoem(e) {
    const poem = e.target.value;
    let poemLines, wordsInLine1, wordsInLine2, wordsInLine3
    if (poem.includes('\n')) {
      poemLines = poem.split('\n');
    } else { return false };
    if (poemLines.length === 3) {
      if (poemLines[0].includes(' ')) {
        wordsInLine1 = poemLines[0].trim().split(' ').length
      };
      if (poemLines[1].includes(' ')) {
        wordsInLine2 = poemLines[1].trim().split(' ').length
      };
      if (poemLines[2].includes(' ')) {
        wordsInLine3 = poemLines[2].trim().split(' ').length
      };
    } else {
      return false;
    };
    if (wordsInLine1 === 5 && wordsInLine2 === 3 && wordsInLine3 === 5) {
      return true;
    } else { return false }
  }

  render() {
    let errorDiv = null;
    if (!this.state.valid) {
      errorDiv = <div id="poem-validation-error" style={{ color: "red" }} >This poem is not written in the right structure!</div>
    }
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.input} onChange={this.validatePoem} />
        {errorDiv}
      </div>
    );
  }
}

export default PoemWriter;
