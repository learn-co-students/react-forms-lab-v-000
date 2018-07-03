import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      valid: false
    };
  }

  updateTextarea = (e) => { 
    this.setState({
      value: e.target.value
    })
  }

  validatePoem = (e) => { 
    this.setState({
      valid: this.validPoem(e)
    })
  }

  validPoem = (e) => { 
    let poem = e.target.value
    let valid = false
    let lines = poem.split("\n")  
    let lineCount = lines.length

    if (lineCount === 3 && !this.anyLineHasWhiteSpace(lines)) {
      if (
        this.wordCount(lines[0]) === 5 &&
        this.wordCount(lines[1]) === 3 &&
        this.wordCount(lines[2]) === 5) { valid = true }
    }

    return valid
  }

  wordCount = (line) => {
    let words = line.split(' ')
    return words.length
  }

  anyLineHasWhiteSpace = (lines) => {
    let hasWhiteSpace = false

    lines.forEach(line => {
      if (this.lineHasWhiteSpace(line)) {
        hasWhiteSpace = true
      }
    });

    return hasWhiteSpace
  }

  lineHasWhiteSpace = (line) => {
    let hasWhiteSpace = false
    if (line.charAt(0) === ' ' || line.charAt(line.length - 1) === ' ') {
      hasWhiteSpace = true
    }

    return hasWhiteSpace
  }

  onTextareaChange = (e) => { 
    this.updateTextarea(e)
    this.validatePoem(e)
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.onTextareaChange}
        />

        {!this.state.valid &&
          <div id="poem-validation-error" style={{ color: "red" }}>
            This poem is not written in the right structure!
          </div>
        }
      </div>
    );
  }
}

export default PoemWriter;
