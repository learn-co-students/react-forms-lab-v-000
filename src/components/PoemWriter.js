import React from 'react';

function countWords(poemLine) {
  return poemLine.split(' ').filter(l => l).length;
}

function valid(poem) {
  const poemLines = poem.split('\n').filter(l => l);
  const correctNumberOfLines = poemLines.length === 3;
  const correctNumberOfWords = countWords(poemLines[0]) === 5 && countWords(poemLines[1]) === 3 && countWords(poemLines[2]) === 5;
  return correctNumberOfLines && correctNumberOfWords;
}

export default class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false,
    };
    this.setPoem = this.setPoem.bind(this);
  }

  setPoem(event) {
    const poem = event.target.value;

    if (poem) {
      this.setState({
        poem: poem,
        valid: valid(poem),
      });
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value ={this.state.poem} onChange = {this.setPoem}/>
          {!this.state.valid ? <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div> : null}
      </div>
    );
  }
}
