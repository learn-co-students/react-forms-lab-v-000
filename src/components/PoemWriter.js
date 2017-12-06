import React from 'react';

const countWords = line => line.split(' ').filter(l => l).length;

const validPoem = poem => {
  if (poem) {
    const lines = poem.split('\n').filter(l => l);
    const lineCount = lines.length === 3;
    const wordsAmount = countWords(lines[0]) === 5 && countWords(lines[1]) === 3 && countWords(lines[2]) === 5;
    return lineCount && wordsAmount;


  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      validPoem: true
    };
  }

  setPoem = event => {
    const content = event.target.value;

    this.setState({
      content,
      isValid: validPoem(content),
    });

  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value= {this.state.content}
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
