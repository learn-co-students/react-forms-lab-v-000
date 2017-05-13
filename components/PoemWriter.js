import React from 'react';

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function isValidPoem(poem) {
  const lines = poem.split('\n').filter(l => l);
  const rightAmountOfLines = lines.length === 3;
  const rightAmountOfWords = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5;
  return rightAmountOfWords && rightAmountOfLines;
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }


  handleTextChange(ev) {
    let poem = ev.target.value;
    if(poem) {
      this.setState({
        poem: poem,
        isValid: isValidPoem(poem)
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handleTextChange} />
        {this.state.isValid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> }
      </div>
    );
  }
}
