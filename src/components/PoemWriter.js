import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      content: "",
      noError: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
    }, this.checkStructure)
  }

  checkStructure = () => {
    this.setState({
      noError: this.isValid(this.state.content),
    })
  }

  isValid = (input) => {
    const inputArray = input.split("\n");
    const lineCount = inputArray.length;
    if (lineCount !== 3) return false;
    return this.wordCount(inputArray[0]) === 5 && this.wordCount(inputArray[1]) === 3 && this.wordCount(inputArray[2]) === 5
  }

  wordCount = function(singleLine) {
    return singleLine.split(/\s+/).filter(x => x).length
  }

  render() {
    return (
      <div>
        <textarea id="poem-input" onChange={this.handleChange}
          rows="3"
          cols="60"
        />
        {this.state.noError ? null : <div id="poem-validation-error" style={{color: 'red'}} >This poem is not written in the right structure! </div> }
      </div>
    );
  }
}

export default PoemWriter;
