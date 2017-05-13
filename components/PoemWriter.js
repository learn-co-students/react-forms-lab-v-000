import React from 'react';

function countWords(line) {
  return line.split(' ').filter(l => l).length;
}

function isConfirmedValid(poem) {
  const poemLines = poem.split('\n');
  const rightTotalOfLines = poemLines.length === 3;
  const rightTotalOfWords = countWords(poemLines[0]) === 5
    && countWords(poemLines[1]) === 3
    && countWords(poemLines[2]) === 5;
  if (rightTotalOfWords && rightTotalOfLines) {
    return true;
  }else {
    return false;
  }
}
export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      isValid: false,
    };

    this.savePoem = this.savePoem.bind(this);
  }

  savePoem(event) {
    const content = event.target.value;

    if (content) {
      this.setState({
        content: content,
        isValid: isConfirmedValid(content),
      });
    }
  }
  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.savePoem}/>
        {!this.state.isValid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
