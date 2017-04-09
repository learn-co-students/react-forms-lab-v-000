import React from 'react';

function countWords(line) {
 return line.split(' ').length
}

function isValidPoem(poem) {
  const poemLines = poem.split('\n');
  const lineCheck = poemLines.length === 3;
  const wordCheck = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5; 
  return lineCheck && wordCheck
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: false,
    };

    this.setPoemContent = this.setPoemContent.bind(this);
  }

  setPoemContent(ev) {
    const content = ev.target.value;

    if (content) {
      this.setState({
        content: content,
        isValid: isValidPoem(content),
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.setPoemContent} />
        {this.state.isValid ? null : <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> }
      </div>
    );
  }
}

module.exports = PoemWriter