import React from 'react';

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.poemIsValid = this.poemIsValid.bind(this);
    this.errorDiv = this.errorDiv.bind(this);

    this.state = {
      value: ''
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  linesInPoem(string) {
    return string.split("\n");
  }

  wordsInLine(string) {
    return string.split(/\b\ +\b/).length;
  }

  poemIsValid() {
    const { value } = this.state;
    const lines = this.linesInPoem(value);
    const isThreeLines = lines.length === 3;
    const fiveInFirst = this.wordsInLine(lines[0] || '') === 5;
    const threeInSecond = this.wordsInLine(lines[1] || '') === 3;
    const fiveInThird = this.wordsInLine(lines[2] || '') === 5;
    return isThreeLines && fiveInFirst && threeInSecond && fiveInThird;
  }

  errorDiv() {
    if (!this.poemIsValid()) {
      return (
        <div id="poem-validation-error" style={{color: 'red'}}>
          This poem is not written in the right structure!
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.value}
          onChange={this.handleChange} />
        {this.errorDiv()}
      </div>
    );
  }
}
