import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      content: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    }, this.checkStructure)
  }
  //
  checkStructure = () => {
    if (this.isValid(this.state.content)) {
      document.getElementById("poem-validation-error").hidden = true;
    } else {
      document.getElementById("poem-validation-error").hidden = false;
    }
  }
  //
  isValid = (input) => {
    const inputArray = input.split("\n");
    const lineCount = input.length;
    if (lineCount !== 3) return false;
    return this.wordCount(inputArray[0]) === 5 && this.wordCount(inputArray[1]) === 3 && this.wordCount(inputArray[2]) === 5
  }
  //
  wordCount = function(line) {
    line.split(/\s+/).filter(x => x).length
  }
// should render non-space array with correct count per line:
// .split(/\s+/).filter(x => x)

  render() {
    return (
      <div>
        <textarea id="poem-input" onChange={this.handleChange}
          rows="3"
          cols="60"
        />
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;
