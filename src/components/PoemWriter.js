import React from 'react';
const wordCounter = line => line.split(' ').filter(l => l).length;
const poemValidator = poem => {
  if(poem) {
    const lines = poem.split('\n').filter(l => l);
    const lineCount = wordCounter(lines[0]) === 5 && wordCounter(lines[1]) === 3 && wordCounter(lines[2]) === 5;
    return lines && lineCount;
  }
  return false;
};

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      words: '',
      isValid: true
    };
  };

  setPoem = event => {
    const words = event.target.value;

    this.setState({
      words,
      isValid: poemValidator(words),
    });
  };

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.words}
          onChange={this.setPoem}
        />
        {!this.state.isValid &&
        <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>
      }
      </div>
    );
  }
}

export default PoemWriter;
