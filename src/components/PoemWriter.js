import React from 'react';

//string > array on spaces > filter out null values > length
const wordCount = line => line.split(' ').filter(Boolean).length

const isPoem = poem => {
  if (poem) {
    const poemLines = poem.split('\n').filter(Boolean);
    const lineCount = poemLines.length === 3;
    const wordsPerLine = wordCount(poemLines[0]) === 5 && wordCount(poemLines[1]) === 3 && wordCount(poemLines[2]) === 5;
    return lineCount && wordsPerLine;
  }
  return false;
}

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      valid: false,
    };
  }

  handleChange = event => {
    const poem = event.target.value;

    if (poem) {
      this.setState({
        poem: poem,
        valid: isPoem(poem),
      })
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.handleChange}
        />
        {!this.state.valid && <div
          id="poem-validation-error"
          style={{color: 'red'}}
        >
          This poem is not written in the right structure!
        </div>}
      </div>
    );
  }
}

export default PoemWriter;
